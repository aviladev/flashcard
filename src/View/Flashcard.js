import always from 'ramda/es/always'
import append from 'ramda/es/append'
import compose from 'ramda/es/compose'
import curry from 'ramda/es/curry'
import of from 'ramda/es/of'
import partial from 'ramda/es/partial'
import prepend from 'ramda/es/prepend'

import { GRADE_BAD, GRADE_GOOD, GRADE_GREAT, } from '../constants'
import html from '../helpers/html'
import val from '../helpers/val'
import preventDefault from '../helpers/preventDefault'

import {
  inputQuestion,
  inputAnswer,
  saveFlashcard,
  showAnswer,
  editFlashcard,
  deleteFlashcard,
  rankAnswer,
} from '../Update'

import FlashcardGrading from './FlashcardGrading'

const {
  a,
  button,
  div,
  form,
  h3,
  h4,
  i,
  label,
  p,
  section,
  textarea,
} = html

const TextField = oninput => description => value =>
  compose(
    div,
    prepend(
      label({ className: 'b f6 mv1', htmlFor: description }, description)
    ),
    of,
    partial(textarea,
      [{
        className: 'w-100 bg-washed-yellow outline-0 mid-gray',
        required: true,
        id: description,
        oninput: compose(oninput, val)
      }]
    )
  ) (value)

const SubmitButton = text =>
  button({
      className: 'f4 ph3 pv2 br1 bg-gray bn white mv2 pointer',
      type: 'submit'
    },
    text
  )

const DeleteIcon = onclick =>
  i({
    className: 'absolute top-0 right-0 fa fa-remove fa-fw black-50 pointer',
    onclick
  })

const FlashcardEditing = dispatch => ({ question, answer, id }) =>
  compose(
    partial(div, ['.w-100.pa2.bg-light-yellow.mv2.shadow-1.relative']),
    append(
      DeleteIcon(
        compose(dispatch, deleteFlashcard, always(id))
      )
    ),
    of,
    partial(form, [{
      onsubmit: compose(
        dispatch,
        saveFlashcard,
        always(id),
        preventDefault
      )
    }]),
    prepend(
      TextField (compose(dispatch, inputQuestion(id)))
        ('Question')
        (question)
    ),
    prepend(
      TextField (compose(dispatch, inputAnswer(id)))
        ('Answer')
        (answer)
    ),
    of,
    SubmitButton
  ) ('Save')

const QuestionSection = onclick => question =>
  compose(
    partial(section, ['.mb1']),
    prepend(h3('.b.f6.mv1.underline', 'Question')),
    of,
    partial(p,
      [{className: 'ma0 pointer hover-bg-black-10 bg-animate pv2 ph1',
        onclick
      }]
    )
  ) (question)

const AnswerSectionShowing = dispatch => onclick => ({answer, id}) =>
  compose(
    section,
    prepend(
      h3('.b.f6.mv1.underline', 'Answer')
    ),
    prepend(
      p({
        className: 'ma0 pointer hover-bg-black-10 bg-animate pv2 ph1',
        onclick
      }, answer)
    ),
    of,
    partial(section, ['.absolute.bottom-0.left-0.w-100.ph2']),
    prepend(h4('.clip', 'Grade answer')),
    of
  ) ( 
    FlashcardGrading
      ( compose(dispatch, rankAnswer(id), always(GRADE_BAD)  ) )
      ( compose(dispatch, rankAnswer(id), always(GRADE_GOOD) ) )
      ( compose(dispatch, rankAnswer(id), always(GRADE_GREAT)) )
  )

const AnswerSectionHidden = onclick =>
  compose(
    section,
    prepend(
      h3('.b.f6.mv1.underline.clip', 'Answer')
    ),
    of
  ) (
    a({
      className: 'f6 underline link pointer',
      onclick
    },'Show Answer')
  )

const AnswerSection = dispatch => onclick => flashcard => showingAnswer =>
  showingAnswer
    ? AnswerSectionShowing
        (dispatch)
        (onclick)
        (flashcard)
    : AnswerSectionHidden
        ( compose(dispatch, showAnswer, always(flashcard.id)) )

const Flashcard = (dispatch, ui, flashcard) =>
  ui.editing 
    ? FlashcardEditing (dispatch) (flashcard)
    : div(
        '.w-100.pa2.bg-light-yellow.shadow-1.mv2.relative.pb5',
        [
          QuestionSection
            (compose(dispatch, editFlashcard, always(flashcard.id)))
            (flashcard.question),
          AnswerSection
            (dispatch)
            (compose(dispatch, editFlashcard, always(flashcard.id)))
            (flashcard)
            (ui.showingAnswer),
          DeleteIcon(
            compose(dispatch, deleteFlashcard, always(flashcard.id))
          )
        ]
      )

export default curry(Flashcard)
