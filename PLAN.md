# Flashcard Study App

## Features

1. Create new Flashcards
2. Edit Flashcard questions and answers
3. Delete Flashcards
4. Answer shown when requested
5. Ability to self grade your own answer
6. Sort cards by answer ranking ascending

    Bad answer => rank = 0

    Good answer => rank = rank + 1
  
    Great answer => rank = rank + 2

## Model

```js
const flashcard = {
  id: 0,
  question: '',
  answer: '',
  rank: 0
}
```

```js
const model = {
  flashcardsById: { 0: flashcard }, // { [id: number]: Flashcard }
  flashcards:     [0], // Array<id>
  flashcardsUI: {
    0: {
      editing:       false,
      showingAnswer: true,
      questionInput:      '',
      answerInput:        '',
    }
  }, // { [id: number]: FlashcardUIState }
  nextId: 1
}
```

## Update Functions

- onAddFlashcard
- onDeleteFlashcard
- onEditFlashcard
- onInputAnswer
- onInputQuestion
- onRankAnswer
- onSaveFlashcard
- onShowAnswer

## View Functions

- View
  - FlashcardAddButton
  - FlashcardList
    - Flashcard
      - FlashcardEditing
        - TextField
        - SubmitButton
      - QuestionSection
      - AnswerSection
        - AnswerSectionShowing
          - FlashcardGrading
        - AnswerSectionHidden
      - DeleteIcon
