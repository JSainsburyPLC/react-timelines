import React, { PropTypes } from 'react'
import Tracks from './Tracks'
import Now from './Now'

const Body = ({ now, time, tracks }) =>
  <div className="timeline__body">
    <Tracks time={time} tracks={tracks} />
    { now && <Now now={now} time={time} /> }
  </div>

Body.propTypes = {
  now: PropTypes.instanceOf(Date),
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Body
