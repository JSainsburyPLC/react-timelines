import React, { PropTypes } from 'react'
import TrackKey from './TrackKey'

const TrackKeys = ({ tracks }) =>
  <div className="track-keys">
    {
      tracks.map(({ id, title, isOpen, toggleOpen, tracks: children }) =>
        <TrackKey
          key={id}
          title={title}
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          tracks={children}
        />
      )
    }
  </div>

TrackKeys.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default TrackKeys
