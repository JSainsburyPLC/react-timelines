import React, { PropTypes } from 'react'
import Marker from './'

const MouseMarker = ({ x }) =>
  <Marker modifier="pointer" x={x}>
    <div>
      <div><strong>{x}</strong></div>
    </div>
  </Marker>

MouseMarker.propTypes = {
  x: PropTypes.number.isRequired
}

export default MouseMarker
