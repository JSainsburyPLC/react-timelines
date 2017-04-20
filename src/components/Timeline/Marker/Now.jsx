import React, { PropTypes, Component } from 'react'
import Marker from './'
import datePropType from '../../../utils/datePropType'
import getMonth from '../../../utils/getMonth'

class TodayMarker extends Component {
  shouldComponentUpdate(nextProps) {
    if ((this.props.time === nextProps.time) && this.props.now === nextProps.now) {
      return false
    }
    return true
  }

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
