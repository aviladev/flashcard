import ap from 'ramda/es/ap'
import converge from 'ramda/es/converge'
import curry from 'ramda/es/curry'
import map from 'ramda/es/map'
import partial from 'ramda/es/partial'
import pipe from 'ramda/es/pipe'
import html from '../helpers/html'

import viewFrom from '../helpers/viewFrom'
import {
  createUiLens,
  createFlashcardLens,
} from '../Model/lenses'
import Flashcard from './Flashcard'

const {
  li,
  ol,
} = html

const [ getUI, getFlashcard ] =
  ap ([viewFrom]) ([createUiLens, createFlashcardLens])

const FlashcardList = (dispatch, model) =>
  pipe(
    map(
      converge(
        pipe(
          Flashcard(dispatch),
          partial (li) (['.w-third.pa2'])
        )
      ) ( ap ([getUI, getFlashcard]) ([model]) )
    ),
    partial (ol) (['.list.pl0.flex.flex-wrap.nl2.nr2'])
  ) (model.flashcards)

export default curry(FlashcardList)
