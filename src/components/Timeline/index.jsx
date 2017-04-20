import React, { PropTypes, Component } from 'react'
import Header from './Header'
import Body from './Body'
import TodayMarker from './TodayMarker'
import MouseMarker from './MouseMarker'

import datePropType from '../../utils/datePropType'
import getRelativeMouseX from '../../utils/getRelativeMouseX'

class Timeline extends Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)

    this.state = {
      mouseOffset: {
        x: 0
      }
    }
  }

  handleMouseMove(e) {
    this.setState({
      mouseOffset: {
        x: getRelativeMouseX(e)
      }
    })
  }

  render() {
    const { now, time, timebar, tracks } = this.props
    return (
      <div className="timeline">
        <div className="timeline__content" style={{ width: `${time.timelineWidth}px` }}>
          <div onMouseMove={this.handleMouseMove}>
            {now && <TodayMarker now={now} time={time} />}
            <MouseMarker mouseOffset={this.state.mouseOffset} />
            <Header time={time} timebar={timebar} />
            <Body now={now} time={time} tracks={tracks} />
          </div>
        </div>
      </div>
    )
  }
}

Timeline.propTypes = {
  now: datePropType,
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Timeline
