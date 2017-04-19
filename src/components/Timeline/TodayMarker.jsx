import React, { PropTypes } from 'react'

import Marker from './Marker'
import datePropType from '../../utils/datePropType'
import getMonth from '../../utils/getMonth'

const TodayMarker = ({ now, time }) =>
  <Marker date={now} time={time}>
    <div>
      <div>Today</div>
      <strong>{`${now.getDate()} ${getMonth(now)}`}</strong>
    </div>
  </Marker>

TodayMarker.propTypes = {
  time: PropTypes.shape({}).isRequired,
  now: datePropType
}

export default TodayMarker
