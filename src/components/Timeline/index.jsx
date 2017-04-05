import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'
import { toTimelineWidth } from '../../utils/time'

const Timeline = ({ time, tracks }) =>
  <div className="timeline" style={{ width: `${toTimelineWidth(time)}px` }}>
    <Header time={time} />
    <Body time={time} tracks={tracks} />
  </div>

Timeline.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Timeline
