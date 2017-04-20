import React, { PropTypes } from 'react'

const Marker = ({ x, modifier, children, visible }) =>
  <div
    className={`marker marker--${modifier} ${visible ? 'is-visible' : ''}`}
    style={{ left: `${x}px` }}
  >
    <div className="marker__label">
      <div className="marker__content">
        {children}
      </div>
    </div>
  </div>

Marker.propTypes = {
  x: PropTypes.number.isRequired,
  modifier: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  children: PropTypes.node
}

export default Marker
