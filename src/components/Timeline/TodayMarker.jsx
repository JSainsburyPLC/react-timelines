import React, { PropTypes, Component } from 'react'
import Marker from './Marker'
import datePropType from '../../utils/datePropType'
import getMonth from '../../utils/getMonth'

class TodayMarker extends Component {
  shouldComponentUpdate(nextProps) {
    if ((this.props.time !== nextProps.time) && this.props.now !== nextProps.now) {
      return true
    }
    return false
  }

  render() {
    const { now, time } = this.props
    return (
      <Marker modifier="today" style={time.toStyleLeft(now)}>
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
