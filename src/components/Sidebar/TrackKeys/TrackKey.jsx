import React, { PropTypes } from 'react'
import TrackKeys from './'

const TrackKey = ({ title, tracks }) =>
  <div className="track-key">
    <div className="track-key__entry">{ title }</div>
    { tracks && tracks.length > 0 && <TrackKeys tracks={tracks} /> }
  </div>

TrackKey.propTypes = {
  title: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default TrackKey
