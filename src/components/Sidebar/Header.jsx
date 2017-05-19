import React from 'react'
import { propTypeTimebar, propTypeSticky } from '../../propTypes'

const Header = ({ timebar: { rows }, sticky: { isSticky, width, height } = {} }) => (
  <div style={isSticky ? { paddingTop: height } : {}}>
    <div
      className={`sidebar__header ${isSticky ? 'is-sticky' : ''}`}
      style={{ width: (isSticky && width > 0) ? width : 'auto' }}
    >
      {
        rows.map(({ id, title }) =>
          <div key={id} className="timebar-key">{title}</div>
        )
      }
    </div>
  </div>
)

Header.propTypes = {
  sticky: propTypeSticky,
  timebar: propTypeTimebar.isRequired
}

export default Header
