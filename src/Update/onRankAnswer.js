import add from 'ramda/es/add'
import always from 'ramda/es/always'
import ap from 'ramda/es/ap'
import append from 'ramda/es/append'
import apply from 'ramda/es/apply'
import compose from 'ramda/es/compose'
import cond from 'ramda/es/cond'
import equals from 'ramda/es/equals'
import flip from 'ramda/es/flip'
import identity from 'ramda/es/identity'
import of from 'ramda/es/of'
import over from 'ramda/es/over'
import pipe from 'ramda/es/pipe'
import set from 'ramda/es/set'
import sortBy from 'ramda/es/sortBy'
import T from 'ramda/es/T'
import view from 'ramda/es/view'

import { GRADE_BAD, GRADE_GOOD, GRADE_GREAT } from '../constants'

import {
  createRankLens,
  createShowAnswerLens,
  flashcardListLens,
} from '../Model/lenses'

const onRankAnswer =
  ({id, grade}, model) =>
    pipe(
      cond ([
        [ equals(GRADE_BAD),   always(always(0)) ],
        [ equals(GRADE_GOOD),  always(add(1))    ],
        [ equals(GRADE_GREAT), always(add(2))    ],
        [ T,                   identity          ]
      ]),
      flip ( over(createRankLens(id)) ) (model),
      set (createShowAnswerLens(id)) (false),
      ap(flip (over(flashcardListLens)))
        (pipe(
          flip (view),
          of,
          append(createRankLens),
          apply(compose),
          sortBy,
        ))
    ) (grade)

export default onRankAnswer
