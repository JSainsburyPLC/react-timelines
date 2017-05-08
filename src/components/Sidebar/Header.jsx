import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ shouldBeSticky, height, width, timebar: { rows } }) => {
  const style = shouldBeSticky
    ? {
      position: 'fixed',
      top: 0,
      width
    }
    : {}
  return (
    <div style={shouldBeSticky ? { paddingTop: height } : {}}>
      <div className="sidebar__header" style={style}>
        {
          rows.map(({ id, title }) =>
            <div key={id} className="timebar-key">{title}</div>
          )
        }
      </div>
    </div>
  )
}

Header.propTypes = {
  shouldBeSticky: PropTypes.bool,
  height: PropTypes.number,
  width: PropTypes.number,
  timebar: PropTypes.shape({})
}

export default Header
