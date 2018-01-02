import React from 'react'
import PropTypes from 'prop-types'

import TrackKeys from './TrackKeys'

const Body = ({ tracks, toggleTrackOpen }) => (
  <div className="rt-sidebar__body">
    <TrackKeys tracks={tracks} toggleOpen={toggleTrackOpen} />
  </div>
)

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func
}

export default Body
