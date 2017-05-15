import PropTypes from 'prop-types'

export const propTypeDate = PropTypes.instanceOf(Date)
export const propTypeTimebar = PropTypes.shape({
  rows: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string
    }).isRequired
  ).isRequired
})

export const propTypeSticky = PropTypes.shape({
  isHeaderSticky: PropTypes.bool,
  setMarkerOffset: PropTypes.func,
  setHeaderHeight: PropTypes.func,
  setViewportWidth: PropTypes.func,
  viewportWidth: PropTypes.number,
  headerHeight: PropTypes.number,
  scrollLeft: PropTypes.number
})
