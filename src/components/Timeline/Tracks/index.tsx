import React, { FunctionComponent } from 'react'

import Track from './Track'

interface TracksProps {
  time: any
  tracks: Array<{
    id: string
    elements: any
    isOpen: boolean
    tracks: any
  }>
  clickElement: any
}

const Tracks: FunctionComponent<TracksProps> = ({ time, tracks, clickElement }) => (
  <div className="rt-tracks">
    {tracks.map(({ id, elements, isOpen, tracks: children }) => (
      <Track key={id} time={time} elements={elements} isOpen={isOpen} tracks={children} clickElement={clickElement} />
    ))}
  </div>
)

export default Tracks
