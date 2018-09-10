import set from 'ramda/es/set'

import { createAnswerInputLens } from '../Model/lenses'

const onInputAnswer =
  ({ id, answer }, model) =>
    set (createAnswerInputLens(id)) (answer) (model)

export default onInputAnswer
