import compose from 'ramda/es/compose'

import FlashcardAddButton from './FlashcardAddButton'
import FlashcardList from './FlashcardList'
import { addFlashcard } from '../Update'

import html from '../helpers/html'

const {
  div,
  h1,
  h2,
  pre,
  section,
} = html

const View = (dispatch, model) => 
  div('.mw8.center', [
    h1('.f2.pv2.bb', 'Flashcard Study'),
    section([
      h2('.f3', FlashcardAddButton ( compose(dispatch, addFlashcard) )),
    ]),
    section([
      h2('.clip', 'Flashcards'),
      FlashcardList (dispatch) (model)
    ]),
    pre(
      '.overflow-x-auto.bg-light-gray.pa2.f6.br2',
      JSON.stringify(model, null, 2)
    ),
  ])

export default View
