import React, { PropTypes } from 'react'

const Marker = ({ x, modifier, children }) =>
  <div
    className={`marker marker--${modifier}`}
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
  children: PropTypes.node
}

export default Marker
