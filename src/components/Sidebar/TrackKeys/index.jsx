import React from 'react'
import PropTypes from 'prop-types'
import { FixedSizeList as List } from 'react-window'

import TrackKey from './TrackKey'

const TrackKeys = ({ tracks, toggleOpen, clickTrackButton }) => (
  <ul className="rt-track-keys">
    <List height={500} itemCount={tracks.length} itemSize={60}>
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
    </List>
  </ul>
)

TrackKeys.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleOpen: PropTypes.func,
  clickTrackButton: PropTypes.func,
}

export default TrackKeys
