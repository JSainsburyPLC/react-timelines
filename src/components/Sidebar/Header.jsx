import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ isSticky, height, width, timebar: { rows } }) =>
  <div style={isSticky ? { paddingTop: height } : {}}>
    <div className={`sidebar__header ${isSticky ? 'is-sticky' : ''}`} style={{ width }}>
      {
        rows.map(({ id, title }) =>
          <div key={id} className="timebar-key">{title}</div>
        )
      }
    </div>
  </div>

Header.propTypes = {
  isSticky: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  timebar: PropTypes.shape({})
}

export default Header
