import React, { PropTypes } from 'react'
import TrackKeys from './TrackKeys'

const Body = ({ tracks, toggleTrackOpen }) =>
  <div className="sidebar__body">
    <TrackKeys tracks={tracks} toggleOpen={toggleTrackOpen} />
  </div>

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func
}

export default Body
