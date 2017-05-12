import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Timebar from './Timebar'
import { propTypeTimebar } from '../../propTypes'

class Header extends PureComponent {
  componentDidMount() {
    this.props.setHeight(this.timebar.offsetHeight)
  }

  componentDidUpdate(prevProps) {
    const { scrollLeft, isSticky } = this.props
    if (scrollLeft !== prevProps.scrollLeft || isSticky !== prevProps.isSticky) {
      this.scroll.scrollLeft = scrollLeft
    }
  }

  render() {
    const {
      time,
      onMove,
      onEnter,
      onLeave,
      isSticky,
      width,
      height,
      visualWidth,
      timebar: { rows }
    } = this.props
    return (
      <div
        style={isSticky ? { paddingTop: height } : {}}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className={`timeline__header ${isSticky ? 'is-sticky' : ''}`}
          style={isSticky ? { width: visualWidth, height } : { height }}
        >
          <div className="timeline__header-scroll" ref={(scroll) => { this.scroll = scroll }}>
            <div ref={(timebar) => { this.timebar = timebar }} style={{ width }}>
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
  isSticky: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  visualWidth: PropTypes.number,
  scrollLeft: PropTypes.number,
  setHeight: PropTypes.func
}

export default Header
