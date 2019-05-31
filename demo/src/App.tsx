import React, { FunctionComponent, useState } from 'react'
import Timeline from 'react-timelines'

import 'react-timelines/lib/css/style.css'

import { buildTimebar, buildTrack } from './builders'
import { NUM_OF_TRACKS, NUM_OF_YEARS, START_YEAR } from './constants'
import { fill } from './utils'

const now = new Date('2021-01-01')
const timebar = buildTimebar()
const initialTracks = fill(NUM_OF_TRACKS).reduce(
  (acc, i) => {
    const track = buildTrack(`${i + 1}`)
    acc[track.id] = track
    return acc
  },
  {} as Record<string, Track>
)

const clickElement = (element: any) => alert(`Clicked element\n${JSON.stringify(element, null, 2)}`)
const clickTrackButton = (track: any) => alert(JSON.stringify(track))

const MIN_ZOOM = 2
const MAX_ZOOM = 20

interface Track {
  id: string
  isOpen: boolean
}

const App: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [zoom, setZoom] = useState(2)
  const [tracks, setTracks] = useState(initialTracks)

  const handleToggleOpen = () => setIsOpen(!isOpen)
  const handleZoomIn = () => setZoom(Math.min(zoom + 1, MAX_ZOOM))
  const handleZoomOut = () => setZoom(Math.max(zoom - 1, MIN_ZOOM))
  const handleToggleTrackOpen = (track: Track) => {
    setTracks({
      ...tracks,
      [track.id]: { ...track, isOpen: !track.isOpen },
    })
  }

  const start = new Date(`${START_YEAR}`)
  const end = new Date(`${START_YEAR + NUM_OF_YEARS}`)

  return (
    <div className="app">
      <h1 className="title">React Timelines</h1>
      <Timeline
        scale={{ start, end, zoom, zoomMin: MIN_ZOOM, zoomMax: MAX_ZOOM }}
        isOpen={isOpen}
        toggleOpen={handleToggleOpen}
        zoomIn={handleZoomIn}
        zoomOut={handleZoomOut}
        clickElement={clickElement}
        clickTrackButton={clickTrackButton}
        timebar={timebar}
        tracks={Object.values(tracks)}
        now={now}
        toggleTrackOpen={handleToggleTrackOpen}
        enableSticky={true}
        scrollToNow={true}
      />
    </div>
  )
}

export default App
