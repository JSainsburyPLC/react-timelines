import React, { FunctionComponent } from 'react'

import TrackKey, { TrackKeyProps } from './TrackKey'

interface TrackKeysProps {
  tracks: Array<TrackKeyProps & { id: string }>
  toggleOpen: (track: any) => void
  clickTrackButton?: (track: any) => void
}

const TrackKeys: FunctionComponent<TrackKeysProps> = ({ tracks, toggleOpen, clickTrackButton }) => (
  <ul className="rt-track-keys">
    {tracks.map(track => (
      <TrackKey key={track.id} track={track} toggleOpen={toggleOpen} clickTrackButton={clickTrackButton} />
    ))}
  </ul>
)

export default TrackKeys
