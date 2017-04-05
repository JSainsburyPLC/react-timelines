import React, { PropTypes } from 'react'
import Element from './Element'
import { toX } from '../../../utils/time'

const Track = ({ time, elements }) =>
  <div className="track">
    {
      elements.map(({ id, start }) => (
        <div key={id} className="track__element" style={{ left: `${toX(time, start)}px` }}>
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
