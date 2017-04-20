import React, { PropTypes } from 'react'
import Marker from './'

const MouseMarker = ({ x, text, visible }) =>
  <Marker modifier="pointer" x={x} visible={visible}>
    <div>
      <div><strong>{text}</strong></div>
    </div>
  </Marker>

MouseMarker.propTypes = {
  x: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool
}

export default MouseMarker
