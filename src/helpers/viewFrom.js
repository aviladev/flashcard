import append from 'ramda/es/append'
import apply from 'ramda/es/apply'
import compose from 'ramda/es/compose'
import flip from 'ramda/es/flip'
import of from 'ramda/es/of'
import pipe from 'ramda/es/pipe'
import view from 'ramda/es/view'

const viewFrom = lensCreator =>
  pipe(
    flip(view),
    of,
    append(lensCreator),
    apply(compose)
  )

export default viewFrom
