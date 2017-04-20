import React, { PropTypes } from 'react'
import Marker from './'

const MouseMarker = ({ x, text }) =>
  <Marker modifier="pointer" x={x}>
    <div>
      <div><strong>{text}</strong></div>
    </div>
  </Marker>

MouseMarker.propTypes = {
  x: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired
}

export default MouseMarker
