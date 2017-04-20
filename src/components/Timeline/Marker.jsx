import React, { PropTypes } from 'react'

const classModifier = {
  today: 'marker--today',
  mouse: 'marker--mouse'
}

const Marker = ({ style, modifier, children }) =>
  <div
    className={`marker ${classModifier[modifier]}`}
    style={style}
  >
    <div className="marker__label">
      <div className="marker__content">
        {children}
      </div>
    </div>
  </div>

Marker.propTypes = {
  style: PropTypes.shape({}).isRequired,
  modifier: PropTypes.string.isRequired,
  children: PropTypes.node
}

export default Marker
