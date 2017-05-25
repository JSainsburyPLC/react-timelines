import React from 'react'
import PropTypes from 'prop-types'

import TrackKeys from './'

const TrackKey = ({ track, toggleOpen }) => {
  const { title, tracks, isOpen, link } = track
  const isExpandable = isOpen !== undefined
  return (
    <div className="track-key">
      <div className="track-key__entry">
        { isExpandable &&
          <button
            title="Expand track"
            className={`track-key__toggle ${isOpen ? 'track-key__toggle--close' : 'track-key__toggle--open'}`}
            onClick={() => toggleOpen(track)}
          >
            { isOpen ? 'Close' : 'Open' }
          </button>
        }
        <span>{title}</span>
        { link && <a className="track-key__link" title="Open link" href={link}>link</a> }
      </div>
      { isOpen && tracks && tracks.length > 0 &&
        <TrackKeys tracks={tracks} toggleOpen={toggleOpen} />
      }
    </div>
  )
}

TrackKey.propTypes = {
  track: PropTypes.shape({
    title: PropTypes.string.isRequired,
    tracks: PropTypes.arrayOf(PropTypes.shape({})),
    isOpen: PropTypes.bool
  }),
  toggleOpen: PropTypes.func
}

export default TrackKey
