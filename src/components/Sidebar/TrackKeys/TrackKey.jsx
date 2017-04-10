import React, { PropTypes } from 'react'
import TrackKeys from './'

const TrackKey = ({ title, tracks, isOpen, toggleOpen }) =>
  <div className="track-key">
    <div className="track-key__entry">
      { toggleOpen &&
        <button
          className="track-key__toggle"
          onClick={toggleOpen}
        >
          { isOpen ? '−' : '+' }
        </button>
      }
      { title }
    </div>
    { isOpen && tracks && tracks.length > 0 &&
      <TrackKeys tracks={tracks} />
    }
  </div>

TrackKey.propTypes = {
  title: PropTypes.string.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func
}

export default TrackKey
