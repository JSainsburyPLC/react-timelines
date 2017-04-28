import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Timebar from './Timebar'

class Header extends PureComponent {
  render() {
    const {
      time,
      onMove,
      onEnter,
      onLeave,
      timebar: { rows }
    } = this.props
    return (
      <div
        className="timeline__header"
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <Timebar time={time} rows={rows} />
      </div>
    )
  }
}

Header.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  onMove: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired
}

export default Header
