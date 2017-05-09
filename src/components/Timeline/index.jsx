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
    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)

    this.state = {
      pointerX: 0,
      pointerVisible: false,
      pointerHighlighted: false,
      scrollLeft: 0
    }
  }

  componentDidMount() {
    if (this.props.stickyHeader) {
      window.addEventListener('resize', this.handleResize)
      this.props.getMarkerOffset(this.timeline)
      this.props.getTimelineWidth(this.timeline)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isHeaderSticky !== nextProps.isHeaderSticky) {
      const scrollLeft = this.timeline.scrollLeft
      this.setState({ scrollLeft })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.props.getTimelineWidth(this.timeline)
    }
  }

  componentWillUnmount() {
    if (this.props.stickyHeader) {
      window.removeEventListener('resize', this.handleResize)
    }
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

  handleResize() {
    requestAnimationFrame(() => {
      this.props.getTimelineWidth(this.timeline)
    })
  }

  render() {
    const {
      now,
      time,
      timebar,
      tracks,
      isHeaderSticky,
      headerHeight,
      timelineVisualWidth,
      getHeaderHeight
    } = this.props
    const {
      pointerX,
      pointerVisible,
      pointerHighlighted,
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
          <div>
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
              getHeight={getHeaderHeight}
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
  getTimelineWidth: PropTypes.func,
  isHeaderSticky: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  headerHeight: PropTypes.number,
  timelineVisualWidth: PropTypes.number,
  isOpen: PropTypes.bool
}

export default Timeline
