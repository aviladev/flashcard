import cond from 'ramda/es/cond'
import propEq from 'ramda/es/propEq'
import T from 'ramda/es/T'

import {
  ADD_FLASHCARD,
  DELETE_FLASHCARD,
  EDIT_FLASHCARD,
  INPUT_ANSWER,
  INPUT_QUESTION,
  RANK_ANSWER,
  SAVE_FLASHCARD,
  SHOW_ANSWER,
} from '../constants'

import onAddFlashcard from './onAddFlashcard'
import onDeleteFlashcard from './onDeleteFlashcard'
import onEditFlashcard from './onEditFlashcard'
import onInputAnswer from './onInputAnswer'
import onInputQuestion from './onInputQuestion'
import onRankAnswer from './onRankAnswer'
import onSaveFlashcard from './onSaveFlashcard'
import onShowAnswer from './onShowAnswer'

export const addFlashcard = () =>
  ({ type: ADD_FLASHCARD })

export const deleteFlashcard = id =>
  ({ type: DELETE_FLASHCARD, id })

export const editFlashcard = id =>
  ({ type: EDIT_FLASHCARD, id })

export const inputAnswer = id => answer =>
  ({ type: INPUT_ANSWER, id, answer })

export const inputQuestion = id => question =>
  ({ type: INPUT_QUESTION, id, question })

export const rankAnswer = id => grade =>
  ({ type: RANK_ANSWER, id, grade })

export const saveFlashcard = id =>
  ({ type: SAVE_FLASHCARD, id })

export const showAnswer = id =>
  ({ type: SHOW_ANSWER, id })

const typeEquals = propEq('type')

const update = cond([
  [ typeEquals (ADD_FLASHCARD   ), onAddFlashcard    ],
  [ typeEquals (DELETE_FLASHCARD), onDeleteFlashcard ],
  [ typeEquals (EDIT_FLASHCARD  ), onEditFlashcard   ],
  [ typeEquals (INPUT_ANSWER    ), onInputAnswer     ],
  [ typeEquals (INPUT_QUESTION  ), onInputQuestion   ],
  [ typeEquals (RANK_ANSWER     ), onRankAnswer      ],
  [ typeEquals (SAVE_FLASHCARD  ), onSaveFlashcard   ],
  [ typeEquals (SHOW_ANSWER     ), onShowAnswer      ],
  [ T,                            (_, model) => model]
])

export default update
