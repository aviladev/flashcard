import pipe from 'ramda/es/pipe'
import set from 'ramda/es/set'

import copyFromLens from '../helpers/copyFromLens'

import {
  createAnswerInputLens,
  createAnswerLens,
  createEditFlashcardLens,
  createQuestionInputLens,
  createQuestionLens,
} from '../Model/lenses'

const onEditFlashcard =
  ({id}, model) =>
    pipe(
      copyFromLens (createQuestionLens(id)) (createQuestionInputLens(id)),
      copyFromLens (createAnswerLens(id)) (createAnswerInputLens(id)),
      set (createEditFlashcardLens(id)) (true),
    ) (model)

export default onEditFlashcard
