import React, { PropTypes, PureComponent } from 'react'
import Marker from './'
import datePropType from '../../../utils/datePropType'
import { getDayMonth } from '../../../utils/formatDate'

class TodayMarker extends PureComponent {
  render() {
    const { now, time, visible } = this.props
    return (
      <Marker modifier="now" x={time.toX(now)} visible={visible}>
        <div>
          <div>Today</div>
          <strong>{getDayMonth(now)}</strong>
        </div>
      </Marker>
    )
  }
}

TodayMarker.propTypes = {
  time: PropTypes.shape({}).isRequired,
  visible: PropTypes.bool.isRequired,
  now: datePropType
}

export default TodayMarker
