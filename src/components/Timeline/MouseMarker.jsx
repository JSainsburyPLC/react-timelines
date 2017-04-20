import React, { PropTypes } from 'react'
import Marker from './Marker'

const MouseMarker = ({ mouseOffset }) =>
  <Marker modifier="mouse" style={{ left: mouseOffset.x }}>
    <div>
      <div><strong>{mouseOffset.x}</strong></div>
    </div>
  </Marker>

MouseMarker.propTypes = {
  mouseOffset: PropTypes.shape({}).isRequired
}

export default MouseMarker
