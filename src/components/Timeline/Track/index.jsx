import React, { PropTypes } from 'react'
import Element from './Element'

const Track = ({ time, elements }) =>
  <div className="track">
    {
      elements.map(({ id, start, end }) => (
        <div
          key={id}
          className="track__element"
          style={{ left: `${time.toX(start)}px`, width: `${time.toX(end) - time.toX(start)}px` }}
        >
          <Element />
        </div>
      ))
    }
  </div>

Track.propTypes = {
  time: PropTypes.shape({}).isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Track
