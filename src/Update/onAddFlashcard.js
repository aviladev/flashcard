import ap from 'ramda/es/ap'
import apply from 'ramda/es/apply'
import assoc from 'ramda/es/assoc'
import call from 'ramda/es/call'
import compose from 'ramda/es/compose'
import flip from 'ramda/es/flip'
import identity from 'ramda/es/identity'
import inc from 'ramda/es/inc'
import map from 'ramda/es/map'
import of from 'ramda/es/of'
import over from 'ramda/es/over'
import pipe from 'ramda/es/pipe'
import prepend from 'ramda/es/prepend'
import view from 'ramda/es/view'
import zip from 'ramda/es/zip'

import {
  createFlashcard,
  createFlashcardUI
} from '../Model/factories'

import {
  flashcardListLens,
  flashcardsByIdLens,
  flashcardsUILens,
  nextIDLens,
} from '../Model/lenses'

const onAddFlashcard =
  (_, model) =>
    pipe(
      ap(
        pipe (
          compose(of, view (nextIDLens)),
          ap ([
            ap (assoc) (createFlashcard),
            flip (assoc) (createFlashcardUI()),
            prepend,
          ]),
          zip ([
            over (flashcardsByIdLens),
            over (flashcardsUILens),
            over (flashcardListLens)
          ]),
          map(apply(call)),
          apply(compose),
        )
      ) (identity),
      over (nextIDLens) (inc),
    ) (model)

export default onAddFlashcard
