import React, { PropTypes } from 'react'
import TrackKey from './TrackKey'

const TrackKeys = ({ tracks }) =>
  <div className="track-keys">
    {
      tracks.map(({ id, tracks: sub, title }) =>
        <TrackKey key={id} tracks={sub} title={title} />
      )
    }
  </div>

TrackKeys.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default TrackKeys
