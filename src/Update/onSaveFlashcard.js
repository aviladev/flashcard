import pipe from 'ramda/es/pipe'
import set from 'ramda/es/set'

import {
  createAnswerInputLens,
  createAnswerLens,
  createEditFlashcardLens,
  createQuestionInputLens,
  createQuestionLens,
  createShowAnswerLens,
} from '../Model/lenses'

import copyFromLens from '../helpers/copyFromLens'

const onSaveFlashcard =
  ({id}, model) =>
    pipe(
      copyFromLens (createQuestionInputLens(id)) (createQuestionLens(id)),
      copyFromLens (createAnswerInputLens(id)) (createAnswerLens(id)),
      set (createQuestionInputLens(id)) (''),
      set (createAnswerInputLens(id)) (''),
      set (createShowAnswerLens(id)) (false),
      set (createEditFlashcardLens(id)) (false),
    ) (model)

export default onSaveFlashcard
