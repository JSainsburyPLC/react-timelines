import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'
import datePropType from '../../utils/datePropType'

const Timeline = ({ now, time, timebar, tracks }) =>
  <div className="timeline" style={{ width: `${time.timelineWidth}px` }}>
    <Header time={time} timebar={timebar} />
    <Body now={now} time={time} tracks={tracks} />
  </div>

Timeline.propTypes = {
  now: datePropType,
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Timeline
