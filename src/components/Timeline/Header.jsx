import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Timebar from './Timebar'
import { propTypeTimebar, propTypeSticky } from '../../propTypes'

class Header extends PureComponent {
  componentDidMount() {
    const { sticky } = this.props
    if (sticky) {
      sticky.setHeaderHeight(this.timebar.offsetHeight)
    }
  }

  componentDidUpdate(prevProps) {
    const { sticky } = this.props
    if (!sticky) {
      return
    }
    const { scrollLeft, isSticky } = sticky
    const prevScrollLeft = prevProps.sticky.scrollLeft
    const prevIsSticky = prevProps.sticky.isSticky
    if (scrollLeft !== prevScrollLeft || isSticky !== prevIsSticky) {
      this.scroll.scrollLeft = scrollLeft
    }
  }

  render() {
    const {
      time,
      onMove,
      onEnter,
      onLeave,
      width,
      timebar: { rows },
      sticky: { isSticky, headerHeight, viewportWidth } = {}
    } = this.props
    return (
      <div
        style={isSticky ? { paddingTop: headerHeight } : {}}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className={`timeline__header ${isSticky ? 'is-sticky' : ''}`}
          style={isSticky ? { width: viewportWidth, headerHeight } : { headerHeight }}
        >
          <div className="timeline__header-scroll" ref={(scroll) => { this.scroll = scroll }}>
            <div
              ref={(timebar) => { this.timebar = timebar }}
              style={isSticky ? { width } : {}}
            >
              <Timebar time={time} rows={rows} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: propTypeTimebar.isRequired,
  onMove: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  width: PropTypes.number,
  sticky: propTypeSticky
}

export default Header
