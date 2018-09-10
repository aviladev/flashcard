const initModel = {
  flashcardsById: {
    0: {
      id: 0,
      question: 'What is currying?',
      answer: 'currying is the technique of translating the evaluation of a function that takes multiple arguments (or a tuple of arguments) into evaluating a sequence of functions, each with a single argument.',
      rank: 0
    },
    1: {
      id: 1,
      question: 'Lorem ipsum dolor sit amet consectetur adipisicing elit?',
      answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      rank: 0
    },
  },
  flashcards: [0, 1],
  flashcardsUI: {
    0: {
      editing: false,
      showingAnswer: false,
      questionInput: '',
      answerInput: '',
    },
    1: {
      editing: false,
      showingAnswer: false,
      questionInput: '',
      answerInput: '',
    }
  },
  nextId: 2
}

export default initModel
