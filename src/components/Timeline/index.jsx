import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'

const Timeline = ({ time, timebar, tracks }) =>
  <div className="timeline" style={{ width: `${time.timelineWidth}px` }}>
    <Header time={time} timebar={timebar} />
    <Body time={time} tracks={tracks} />
  </div>

Timeline.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Timeline
