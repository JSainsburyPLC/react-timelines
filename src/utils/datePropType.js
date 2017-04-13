import { PropTypes } from 'react'

const propTypeDate = PropTypes.oneOfType([
  PropTypes.shape({}),
  PropTypes.instanceOf(Date)
])

export default propTypeDate
