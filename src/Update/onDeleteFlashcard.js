import dissocPath from 'ramda/es/dissocPath'
import over from 'ramda/es/over'
import pipe from 'ramda/es/pipe'
import without from 'ramda/es/without'

import { flashcardListLens } from '../Model/lenses'

const onDeleteFlashcard =
  ({id}, model) =>
    pipe(
      dissocPath (['flashcardsById', String(id)]),
      dissocPath (['flashcardsUI', String(id)]),
      over (flashcardListLens) (without([id])),
    ) (model)

export default onDeleteFlashcard
