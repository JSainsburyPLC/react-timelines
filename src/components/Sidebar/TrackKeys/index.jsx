import React from 'react'
import PropTypes from 'prop-types'

import VirtualisedElement from '../../Virtualised/Element'
import TrackKey from './TrackKey'

const TrackKeys = ({ tracks, toggleOpen, clickTrackButton, scrollSync }) => (
  <ul className="rt-track-keys">
    <VirtualisedElement id="track-keys" scrollSync={scrollSync}>
      {({ index, style }) => {
        const track = tracks[index]

        return (
          <TrackKey
            key={track.id}
            track={track}
            toggleOpen={toggleOpen}
            clickTrackButton={clickTrackButton}
            style={style}
          />
        )
      }}
    </VirtualisedElement>
  </ul>
)

TrackKeys.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleOpen: PropTypes.func,
  clickTrackButton: PropTypes.func,
  scrollSync: PropTypes.shape({}).isRequired,
}

export default TrackKeys
