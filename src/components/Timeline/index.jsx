import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Body from './Body'
import NowMarker from './Marker/Now'
import PointerMarker from './Marker/Pointer'

import getMouseX from '../../utils/getMouseX'
import { getDayMonth } from '../../utils/formatDate'

class Timeline extends Component {
  constructor(props) {
    super(props)

    this.handleMouseMove = this.handleMouseMove.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
    this.getTimelineWidth = this.getTimelineWidth.bind(this)
    this.handleScroll = this.handleScroll.bind(this)

    this.state = {
      pointerX: 0,
      pointerVisible: false,
      pointerHighlighted: false,
      timelineVisualWidth: 0,
      scrollLeft: 0
    }
  }

  componentDidMount() {
    this.props.getHeaderHeight(this.header)
    this.props.getMarkerOffset(this.timeline)
    this.getTimelineWidth()
  }

  getTimelineWidth() {
    this.setState({ timelineVisualWidth: this.timeline.offsetWidth })
  }

  handleMouseMove(e) {
    this.setState({ pointerX: getMouseX(e) })
  }

  handleMouseLeave() {
    this.setState({ pointerHighlighted: false })
  }

  handleMouseEnter() {
    this.setState({ pointerVisible: true, pointerHighlighted: true })
  }

  handleScroll() {
    requestAnimationFrame(() => {
      const scrollLeft = this.timeline.scrollLeft
      this.setState({ scrollLeft })
    })
  }

  render() {
    const { now, time, timebar, tracks, isHeaderSticky, headerHeight } = this.props
    const {
      pointerX,
      pointerVisible,
      pointerHighlighted,
      timelineVisualWidth,
      scrollLeft
    } = this.state
    return (
      <div className="timeline" ref={(timeline) => { this.timeline = timeline }} onScroll={isHeaderSticky && this.handleScroll}>
        <div className="timeline__content" style={{ width: `${time.timelineWidth}px` }}>
          {now && <NowMarker now={now} visible time={time} />}
          <PointerMarker
            x={pointerX}
            visible={pointerVisible}
            highlighted={pointerHighlighted}
            text={getDayMonth(time.fromX(pointerX))}
          />
          <div ref={(header) => { this.header = header }}>
            <Header
              time={time}
              timebar={timebar}
              onMove={this.handleMouseMove}
              onEnter={this.handleMouseEnter}
              onLeave={this.handleMouseLeave}
              width={time.timelineWidth}
              isSticky={isHeaderSticky}
              height={headerHeight}
              visualWidth={timelineVisualWidth}
              scrollLeft={scrollLeft}
            />
          </div>
          <Body time={time} tracks={tracks} />
        </div>
      </div>
    )
  }
}

Timeline.propTypes = {
  now: PropTypes.instanceOf(Date),
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  getHeaderHeight: PropTypes.func,
  getMarkerOffset: PropTypes.func,
  isHeaderSticky: PropTypes.bool,
  headerHeight: PropTypes.number
}

export default Timeline
