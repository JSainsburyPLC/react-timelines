import React, { PropTypes, PureComponent } from 'react'
import Marker from './'
import datePropType from '../../../utils/datePropType'
import getMonth from '../../../utils/getMonth'

class TodayMarker extends PureComponent {
  render() {
    const { now, time } = this.props
    return (
      <Marker modifier="now" x={time.toX(now)}>
        <div>
          <div>Today</div>
          <strong>{`${now.getDate()} ${getMonth(now)}`}</strong>
        </div>
      </Marker>
    )
  }
}

TodayMarker.propTypes = {
  time: PropTypes.shape({}).isRequired,
  now: datePropType
}

export default TodayMarker
