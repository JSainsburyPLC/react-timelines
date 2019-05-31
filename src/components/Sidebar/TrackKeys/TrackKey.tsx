import React, { FunctionComponent } from 'react'

import TrackKeys from '.'

interface TrackKeyProps {
  track: any
  toggleOpen: () => void
  clickTrackButton: () => void
}

const TrackKey: FunctionComponent<TrackKeyProps> = ({ track, toggleOpen, clickTrackButton }) => {
  const { title, tracks, isOpen, hasButton, sideComponent } = track
  const isExpandable = isOpen !== undefined

  const buildSideComponent = () => {
    if (sideComponent) {
      return React.cloneElement(sideComponent)
    }
    if (hasButton && clickTrackButton) {
      const handleClick = () => clickTrackButton(track)
      return <button className="rt-track-key__side-button" onClick={handleClick} type="button" />
    }

    return null
  }

  return (
    <li className="rt-track-key">
      <div className="rt-track-key__entry">
        {isExpandable && (
          <button
            title="Expand track"
            className={`rt-track-key__toggle ${isOpen ? 'rt-track-key__toggle--close' : 'rt-track-key__toggle--open'}`}
            onClick={() => toggleOpen(track)}
            type="button"
          >
            {isOpen ? 'Close' : 'Open'}
          </button>
        )}
        <span className="rt-track-key__title">{title}</span>
        {buildSideComponent()}
      </div>
      {isOpen && tracks && tracks.length > 0 && <TrackKeys tracks={tracks} toggleOpen={toggleOpen} />}
    </li>
  )
}

export default TrackKey
export { TrackKeyProps }
