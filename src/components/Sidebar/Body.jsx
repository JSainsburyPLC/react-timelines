import React from 'react'
import PropTypes from 'prop-types'

import TrackKeys from './TrackKeys'

const Body = ({ tracks, toggleTrackOpen, clickTrackButton, scrollSync }) => (
  <div className="rt-sidebar__body">
    <TrackKeys
      tracks={tracks}
      toggleOpen={toggleTrackOpen}
      clickTrackButton={clickTrackButton}
      scrollSync={scrollSync}
    />
  </div>
)

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  clickTrackButton: PropTypes.func,
  scrollSync: PropTypes.shape({}).isRequired,
}

export default Body
