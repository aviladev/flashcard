import html from '../helpers/html'
const { button, i, } = html

const FlashcardAddButton = onclick =>
  button(
    { className: 'pointer pa2 br1 mv2 bg-green bn white',
      onclick
    },
    [
      i('.fa.fa-plus.ph1'),
      'Add Flashcard'
    ]
  )

export default FlashcardAddButton
