import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Timebar from './Timebar'
import { propTypeTimebar } from '../../propTypes'

class Header extends PureComponent {
  constructor(props) {
    super(props)

    this.handleScroll = this.handleScroll.bind(this)
  }
  componentDidMount() {
    const { sticky } = this.props
    if (sticky) {
      sticky.setHeaderHeight(this.timebar.offsetHeight)
      const { scrollLeft, isSticky } = sticky
      if (isSticky) {
        this.scroll.scrollLeft = scrollLeft
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { sticky } = this.props
    if (sticky) {
      const { scrollLeft, isSticky } = sticky
      const prevScrollLeft = prevProps.sticky.scrollLeft
      const prevIsSticky = prevProps.sticky.isSticky
      if (scrollLeft !== prevScrollLeft || isSticky !== prevIsSticky) {
        this.scroll.scrollLeft = scrollLeft
      }
    }
  }

  handleScroll() {
    this.props.sticky.handleHeaderScrollY(this.scroll.scrollLeft)
  }

  render() {
    const {
      time,
      onMove,
      onEnter,
      onLeave,
      width,
      timebar: rows,
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
          className={`rt-timeline__header ${isSticky ? 'rt-is-sticky' : ''}`}
          style={isSticky ? { width: viewportWidth, height: headerHeight } : {}}
        >
          <div className="rt-timeline__header-scroll" ref={(scroll) => { this.scroll = scroll }} onScroll={isSticky && this.handleScroll}>
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
  sticky: PropTypes.shape({
    isSticky: PropTypes.bool.isRequired,
    setHeaderHeight: PropTypes.func.isRequired,
    viewportWidth: PropTypes.number.isRequired,
    handleHeaderScrollY: PropTypes.func.isRequired,
    scrollLeft: PropTypes.number.isRequired
  })
}

export default Header
