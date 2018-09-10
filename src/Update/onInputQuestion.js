import set from 'ramda/es/set'

import { createQuestionInputLens } from '../Model/lenses'

const onInputQuestion =
  ({ id, question }, model) =>
    set (createQuestionInputLens(id)) (question) (model)

export default onInputQuestion
