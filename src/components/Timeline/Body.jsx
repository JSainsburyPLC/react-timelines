import React, { PropTypes } from 'react'
import Tracks from './Tracks'

const Body = ({ time, tracks }) =>
  <div className="timeline__body">
    <Tracks time={time} tracks={tracks} />
  </div>

Body.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Body
