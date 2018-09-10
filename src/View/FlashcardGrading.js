import curry from 'ramda/es/curry'

import html from '../helpers/html'

const {
  button,
  li,
  ol,
} = html

const GradingButton = bg => onclick => text =>
  button(
    {
      className: `pointer f4 ph3 pv2 bn white br1 ${bg}`,
      onclick
    },
    text
  )

const FlashcardGrading = (onBad, onGood, onGreat) =>
  ol('.list.pl0.mv2.flex.justify-between', [
    li(GradingButton ('bg-red') (onBad) ('Bad')),
    li(GradingButton ('bg-blue') (onGood) ('Good')),
    li(GradingButton ('bg-dark-green') (onGreat) ('Great')),
  ])

export default curry(FlashcardGrading)
