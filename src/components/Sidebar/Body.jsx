import React, { PropTypes } from 'react'
import TrackKeys from './TrackKeys'

const Body = ({ tracks }) =>
  <div className="sidebar__body">
    <TrackKeys tracks={tracks} />
  </div>

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Body
