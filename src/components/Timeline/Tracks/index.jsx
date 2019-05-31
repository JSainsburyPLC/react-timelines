import React from 'react'
import PropTypes from 'prop-types'
import { FixedSizeList as List } from 'react-window'

import Track from './Track'

const Tracks = ({ time, tracks, clickElement }) => (
  <div className="rt-tracks">
    <List height={500} itemCount={tracks.length} itemSize={60}>
      {({ index, style }) => {
        const { elements, isOpen, tracks: children } = tracks[index]

        return (
          <Track
            time={time}
            elements={elements}
            isOpen={isOpen}
            tracks={children}
            clickElement={clickElement}
            style={style}
          />
        )
      }}
    </List>
  </div>
)

Tracks.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  clickElement: PropTypes.func,
}

export default Tracks
