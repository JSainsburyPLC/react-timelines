import PropTypes from 'prop-types'
import React, { FunctionComponent } from 'react'

import TrackKey, { TrackKeyProps } from './TrackKey'

interface TrackKeysProps {
  tracks: Array<TrackKeyProps & { id: string }>
  toggleOpen: () => void
  clickTrackButton: () => void
}

const TrackKeys: FunctionComponent<TrackKeysProps> = ({ tracks, toggleOpen, clickTrackButton }) => (
  <ul className="rt-track-keys">
    {tracks.map(track => (
      <TrackKey key={track.id} track={track} toggleOpen={toggleOpen} clickTrackButton={clickTrackButton} />
    ))}
  </ul>
)

TrackKeys.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleOpen: PropTypes.func,
  clickTrackButton: PropTypes.func,
}

export default TrackKeys
