import ap from 'ramda/es/ap'
import flip from 'ramda/es/flip'
import set from 'ramda/es/set'
import view from 'ramda/es/view'

const copyFromLens = fromLens => toLens =>
  ap
    ( flip (set(toLens)) )
    ( view (fromLens) )

export default copyFromLens
