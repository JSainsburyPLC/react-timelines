import React, { PropTypes } from 'react'
import Tracks from './'
import Element from './Element'

const Track = ({ time, elements, tracks, style }) =>
  <div className="track">
    <div className="track__elements">
      {
        elements.map(({ id, title, start, end }) => (
          <div
            key={id}
            className="track__element"
            style={time.toStyleLeftAndWidth(start, end)}
          >
            <Element title={title} style={style} />
          </div>
        ))
      }
    </div>
    { tracks && tracks.length > 0 && <Tracks time={time} tracks={tracks} /> }
  </div>

Track.propTypes = {
  time: PropTypes.shape({}).isRequired,
  elements: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  style: PropTypes.shape({})
}

export default Track
