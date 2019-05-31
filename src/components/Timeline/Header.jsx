import React from 'react'
import PropTypes from 'prop-types'

import Timebar from './Timebar'

const Header = ({ time, onMove, onEnter, onLeave, timebar: rows }) => (
  <div onMouseMove={onMove} onMouseEnter={onEnter} onMouseLeave={onLeave}>
    <div className="rt-timeline__header">
      <div className="rt-timeline__header-scroll">
        <Timebar time={time} rows={rows} />
      </div>
    </div>
  </div>
)

Header.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  onMove: PropTypes.func.isRequired,
  onEnter: PropTypes.func.isRequired,
  onLeave: PropTypes.func.isRequired,
}

export default Header
