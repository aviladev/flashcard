export const createFlashcard = id =>
  ({
    id,
    question: '',
    answer: '',
    rank: 0
  })

export const createFlashcardUI = () =>
  ({
    editing: true,
    showingAnswer: false,
    questionInput: '',
    answerInput: '',
  })
