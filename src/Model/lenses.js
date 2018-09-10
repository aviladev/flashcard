import lensPath from 'ramda/es/lensPath'

export const createAnswerInputLens = id =>
  lensPath(['flashcardsUI', id, 'answerInput'])

export const createAnswerLens = id =>
  lensPath(['flashcardsById', id, 'answer'])

export const createEditFlashcardLens = id =>
  lensPath(['flashcardsUI', id, 'editing'])

export const createFlashcardLens = id =>
  lensPath(['flashcardsById', id])

export const createQuestionInputLens = id =>
  lensPath(['flashcardsUI', id, 'questionInput'])

export const createQuestionLens = id =>
  lensPath(['flashcardsById', id, 'question'])

export const createRankLens = id =>
  lensPath(['flashcardsById', id, 'rank'])

export const createShowAnswerLens = id =>
  lensPath(['flashcardsUI', id, 'showingAnswer'])

export const createUiLens = id =>
  lensPath(['flashcardsUI', id])

export const flashcardListLens = lensPath(['flashcards'])
export const flashcardsByIdLens = lensPath(['flashcardsById'])
export const flashcardsUILens = lensPath(['flashcardsUI'])
export const nextIDLens = lensPath(['nextId'])
