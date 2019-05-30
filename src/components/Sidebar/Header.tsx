import PropTypes from 'prop-types'
import React, { FunctionComponent } from 'react'

interface StickyProps {
  isSticky: boolean
  sidebarWidth: number
  headerHeight: number
}

interface HeaderProps {
  timebar: Array<{ id: string; title: string }>
  sticky: StickyProps
}

const Header: FunctionComponent<HeaderProps> = ({
  timebar,
  sticky: { isSticky, sidebarWidth, headerHeight } = {} as StickyProps,
}) => (
  <div style={isSticky ? { paddingTop: headerHeight } : {}}>
    <div
      className={`rt-sidebar__header ${isSticky ? 'rt-is-sticky' : ''}`}
      style={isSticky ? { width: sidebarWidth } : {}}
    >
      {timebar.map(({ id, title }) => (
        <div key={id} className="rt-timebar-key">
          {title}
        </div>
      ))}
    </div>
  </div>
)

Header.propTypes = {
  sticky: PropTypes.shape({
    isSticky: PropTypes.bool.isRequired,
    headerHeight: PropTypes.number.isRequired,
    sidebarWidth: PropTypes.number.isRequired,
  }),
  timebar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
}

export default Header
export { HeaderProps }
