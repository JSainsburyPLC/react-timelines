import React from 'react'
import PropTypes from 'prop-types'

import TrackKey from './TrackKey'

const TrackKeys = ({ tracks, toggleOpen }) =>
  <div className="track-keys">
    {
      tracks.map(track => (
        <TrackKey
          key={track.id}
          track={track}
          toggleOpen={toggleOpen}
        />
      ))
    }
  </div>

TrackKeys.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleOpen: PropTypes.func
}

export default TrackKeys
