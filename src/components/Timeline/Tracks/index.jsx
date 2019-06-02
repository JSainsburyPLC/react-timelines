import React from 'react'
import PropTypes from 'prop-types'

import VirtualisedElement from '../../Virtualised/Element'
import Track from './Track'

const Tracks = ({ time, tracks, clickElement }) => (
  <div className="rt-tracks">
    <VirtualisedElement id="tracks">
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
}

export default Tracks
