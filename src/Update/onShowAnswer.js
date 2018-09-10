import set from 'ramda/es/set'

import { createShowAnswerLens } from '../Model/lenses'

const onShowAnswer =
  ({id}, model) =>
    set (createShowAnswerLens(id)) (true) (model)

export default onShowAnswer
