import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Timebar from './Timebar'
import { propTypeTimebar } from '../../propTypes'

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
    const { scrollLeft, isHeaderSticky } = sticky
    const prevScrollLeft = prevProps.sticky.scrollLeft
    const prevIsHeaderSticky = prevProps.sticky.isHeaderSticky
    if (scrollLeft !== prevScrollLeft || isHeaderSticky !== prevIsHeaderSticky) {
      this.scroll.scrollLeft = scrollLeft
    }
  }

  render() {
    const {
      time,
      onMove,
      onEnter,
      onLeave,
      sticky,
      width,
      timebar: { rows }
    } = this.props
    const { isHeaderSticky, headerHeight, viewportWidth } = sticky || {}
    return (
      <div
        style={isHeaderSticky ? { paddingTop: headerHeight } : {}}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className={`timeline__header ${isHeaderSticky ? 'is-sticky' : ''}`}
          style={isHeaderSticky ? { width: viewportWidth, headerHeight } : { headerHeight }}
        >
          <div className="timeline__header-scroll" ref={(scroll) => { this.scroll = scroll }}>
            <div
              ref={(timebar) => { this.timebar = timebar }}
              style={isHeaderSticky ? { width } : {}}
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
  sticky: PropTypes.shape({
    isHeaderSticky: PropTypes.bool,
    setHeaderHeight: PropTypes.func,
    headerHeight: PropTypes.number,
    viewportWidth: PropTypes.number,
    scrollLeft: PropTypes.number
  })
}

export default Header
