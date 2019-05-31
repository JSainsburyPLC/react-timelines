import React, { FunctionComponent, useState } from 'react'
import Timeline from 'react-timelines'

import 'react-timelines/lib/css/style.css'

import { buildTimebar } from './builders'
import data from './data'

interface Group {
  id: string
  parties: {
    republicans: typeof data
    democrats: typeof data
  }
}

interface Track {
  tracks: any[]
  elements: any[]
  id: string
  title: string
  isOpen: boolean
}

const toElements = (e: typeof data) =>
  e.map(entry => ({
    id: `${entry.firstname}-${entry.lastname}-${entry.startdate}`,
    title: entry.name,
    start: new Date(entry.startdate),
    end: new Date(entry.enddate),
  }))

const entries = data.filter(a => new Date(a.enddate).getFullYear() > 1970)
const START_DATE = Math.min(...entries.map(entry => new Date(entry.startdate).getTime()))
const END_DATE = Math.max(...entries.map(entry => new Date(entry.enddate).getTime()))
const groupsByState = entries.reduce(
  (out, entry) => {
    const { state } = entry

    if (!state) {
      return out
    }

    if (!out[state]) {
      out[state] = {
        id: state,
        parties: {
          republicans: [],
          democrats: [],
        },
      }
    }

    if (entry.party === 'Democrat') {
      out[state].parties.democrats.push(entry)
    } else {
      out[state].parties.republicans.push(entry)
    }

    return out
  },
  {} as Record<string, Group>
)

const now = new Date('2005-01-01')
const timebar = buildTimebar(new Date(START_DATE), new Date(END_DATE))

const initialTracks = Object.values(groupsByState).reduce(
  (out, group) => ({
    ...out,
    [group.id]: {
      elements: [],
      tracks: [
        {
          id: `${group.id}-democrats`,
          title: 'Democrats',
          tracks: [],
          elements: toElements(group.parties.democrats),
        },
        {
          id: `${group.id}-republicans`,
          title: 'Republicans',
          tracks: [],
          elements: toElements(group.parties.republicans),
        },
      ],
      id: group.id,
      title: group.id,
      isOpen: true,
    },
  }),
  {} as Record<string, Track>
)

const clickElement = (element: any) => alert(`Clicked element\n${JSON.stringify(element, null, 2)}`)
const clickTrackButton = (track: any) => alert(JSON.stringify(track))

const MIN_ZOOM = 1
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

  const start = new Date(START_DATE)
  const end = new Date(END_DATE)

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
