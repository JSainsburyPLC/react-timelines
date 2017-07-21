import React from 'react'
import PropTypes from 'prop-types'

import TrackKeys from './'

const TrackKey = ({ track, toggleOpen }, context) => {
  const { title, tracks, isOpen, hasButton, sideComponent } = track
  const { clickTrackButton } = context
  const isExpandable = isOpen !== undefined
  const handleClick = () => clickTrackButton(track)

  const showSide = !!sideComponent
  const showButton = !showSide && hasButton && clickTrackButton

  return (
    <li className="rt-track-key">
      <div className="rt-track-key__entry">
        { isExpandable &&
          <button
            title="Expand track"
            className={`rt-track-key__toggle ${isOpen ? 'rt-track-key__toggle--close' : 'rt-track-key__toggle--open'}`}
            onClick={() => toggleOpen(track)}
          >
            { isOpen ? 'Close' : 'Open' }
          </button>
        }
        <span className="rt-track-key__title">{title}</span>
        { showButton && <button className="rt-track-key__side rt-track-key__side--button" onClick={handleClick} /> }
        { showSide && <div className="rt-track-key__side">{ React.cloneElement(sideComponent) }</div> }
      </div>
      { isOpen && tracks && tracks.length > 0 &&
        <TrackKeys tracks={tracks} toggleOpen={toggleOpen} />
      }
    </li>
  )
}

TrackKey.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.shape({})),
    isOpen: PropTypes.bool,
    hasButton: PropTypes.bool
  }),
  toggleOpen: PropTypes.func
}

TrackKey.contextTypes = {
  clickTrackButton: PropTypes.func
}

export default TrackKey
