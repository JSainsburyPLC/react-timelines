import React from 'react'
import PropTypes from 'prop-types'

import VirtualisedElement from '../../Virtualised/Element'
import Track from './Track'

const Tracks = ({ time, tracks, clickElement, scrollSync }) => (
  <div className="rt-tracks">
    <VirtualisedElement id="tracks" scrollSync={scrollSync}>
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
    </VirtualisedElement>
  </div>
)

Tracks.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  clickElement: PropTypes.func,
  scrollSync: PropTypes.shape({}).isRequired,
}

export default Tracks
