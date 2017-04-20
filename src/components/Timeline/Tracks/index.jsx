import React, { PropTypes } from 'react'
import Track from './Track'

const Tracks = ({ time, tracks }) =>
  <div className="tracks">
    {
      tracks.map(({ id, elements, isOpen, tracks: children, style }) =>
        <Track
          key={id}
          time={time}
          elements={elements}
          isOpen={isOpen}
          tracks={children}
          style={style}
        />
      )
    }
  </div>

Tracks.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Tracks
