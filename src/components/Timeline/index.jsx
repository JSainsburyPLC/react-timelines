import React, { PropTypes, Component } from 'react'
import Header from './Header'
import Body from './Body'
import NowMarker from './Marker/Now'
import PointerMarker from './Marker/Pointer'

import datePropType from '../../utils/datePropType'
import getMouseX from '../../utils/getMouseX'

class Timeline extends Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)

    this.state = { pointerX: 0 }
  }

  handleMouseMove(e) {
    this.setState({ pointerX: getMouseX(e) })
  }

  render() {
    const { now, time, timebar, tracks } = this.props
    return (
      <div className="timeline">
        <div className="timeline__content" style={{ width: `${time.timelineWidth}px` }}>
          <div onMouseMove={this.handleMouseMove}>
            {now && <NowMarker now={now} time={time} />}
            <PointerMarker x={this.state.pointerX} />
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
