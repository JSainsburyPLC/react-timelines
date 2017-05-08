import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Timebar from './Timebar'

class Header extends PureComponent {
  componentWillReceiveProps(nextProps) {
    if (this.props.scrollLeft !== nextProps.scrollLeft) {
      this.wrapper.scrollLeft = nextProps.scrollLeft
    }
  }

  render() {
    const {
      time,
      onMove,
      onEnter,
      onLeave,
      shouldHeaderBeSticky,
      width,
      height,
      visualWidth,
      timebar: { rows }
    } = this.props
    const style = shouldHeaderBeSticky
      ? {
        position: 'fixed',
        width: visualWidth
      }
      : {}
    return (
      <div style={shouldHeaderBeSticky ? { paddingTop: height } : {}}>
        <div className="timeline__header-wrapper" style={style} ref={(wrapper) => { this.wrapper = wrapper }}>
          <div
            className="timeline__header"
            style={{ width }}
            onMouseMove={onMove}
            onMouseEnter={onEnter}
            onMouseLeave={onLeave}
          >
            <Timebar time={time} rows={rows} />
          </div>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  onMove: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
  shouldHeaderBeSticky: PropTypes.bool,
  width: PropTypes.number,
  height: PropTypes.number,
  visualWidth: PropTypes.number,
  scrollLeft: PropTypes.number
}

export default Header
