import React, { FunctionComponent } from 'react'

import Tracks from '.'
import Element from './Element'

interface TrackProps {
  time: any
  elements: Array<{
    id: string
    start: Date
    end: Date
    time: any
    style: any
    title: any
    classes: any
    dataSet: any
    tooltip: any
    clickElement: any
  }>
  isOpen: any
  tracks: any
  clickElement: any
}

const Track: FunctionComponent<TrackProps> = ({ time, elements, isOpen, tracks, clickElement }) => (
  <div className="tr-track">
    <div className="rt-track__elements">
      {elements
        .filter(({ start, end }) => end > start)
        .map(element => (
          <Element key={element.id} time={time} clickElement={clickElement} {...element} />
        ))}
    </div>
    {isOpen && tracks && tracks.length > 0 && <Tracks time={time} tracks={tracks} clickElement={clickElement} />}
  </div>
)

export default Track
