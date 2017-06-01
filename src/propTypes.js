import PropTypes from 'prop-types'

export const propTypeDate = PropTypes.instanceOf(Date)
export const propTypeTimebar = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string
  }).isRequired
)
