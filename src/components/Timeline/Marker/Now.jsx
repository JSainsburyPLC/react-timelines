import React, { PropTypes, PureComponent } from 'react'
import Marker from './'
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
  now: PropTypes.instanceOf(Date).isRequired
}

export default TodayMarker
