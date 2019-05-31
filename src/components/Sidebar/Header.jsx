import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ timebar }) => (
  <div className="rt-sidebar__header">
    {timebar.map(({ id, title }) => (
      <div key={id} className="rt-timebar-key">
        {title}
      </div>
    ))}
  </div>
)

Header.propTypes = {
  timebar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
}

export default Header
