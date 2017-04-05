import React, { PropTypes } from 'react'
import Element from './Element'

const Track = ({ elements }) =>
  <div className="track">
    {
      elements.map(element => (
        <div className="track__element" style={{ left: `${element.left}px` }}>
          <Element />
        </div>
      ))
    }
  </div>

Track.propTypes = {
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Track
