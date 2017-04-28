import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ timebar: { rows } }) =>
  <div className="sidebar__header">
    {
      rows.map(({ id, title }) =>
        <div key={id} className="timebar-key">{title}</div>
      )
    }
  </div>

Header.propTypes = {
  timebar: PropTypes.shape({})
}

export default Header
