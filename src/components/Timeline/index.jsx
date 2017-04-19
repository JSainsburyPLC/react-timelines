import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'
import TodayMarker from './TodayMarker'

import datePropType from '../../utils/datePropType'

const Timeline = ({ now, time, timebar, tracks }) =>
  <div className="timeline">
    <div className="timeline__wrapper" style={{ width: `${time.timelineWidth}px` }}>
      {now && <TodayMarker now={now} time={time} />}
      <Header time={time} timebar={timebar} />
      <Body now={now} time={time} tracks={tracks} />
    </div>
  </div>

Timeline.propTypes = {
  now: datePropType,
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Timeline
