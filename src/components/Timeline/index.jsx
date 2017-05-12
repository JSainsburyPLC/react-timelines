import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Body from './Body'
import NowMarker from './Marker/Now'
import PointerMarker from './Marker/Pointer'

import getMouseX from '../../utils/getMouseX'
import { getDayMonth } from '../../utils/formatDate'
import raf from '../../utils/raf'
import { addListener, removeListener } from '../../utils/events'

import { propTypeTimebar } from '../../propTypes'

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
      addListener('resize', this.handleResize)
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
    const { isOpen, getTimelineWidth, stickyHeader } = this.props
    if (stickyHeader && prevProps.isOpen !== isOpen) {
      getTimelineWidth(this.timeline)
    }
  }

  componentWillUnmount() {
    if (this.props.stickyHeader) {
      removeListener('resize', this.handleResize)
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
    raf(() => {
      const scrollLeft = this.timeline.scrollLeft
      this.setState({ scrollLeft })
    })
  }

  handleResize() {
    raf(() => {
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
      setHeaderHeight
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
              setHeight={setHeaderHeight}
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
  timebar: propTypeTimebar.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  setHeaderHeight: PropTypes.func.isRequired,
  getMarkerOffset: PropTypes.func.isRequired,
  getTimelineWidth: PropTypes.func.isRequired,
  isHeaderSticky: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  headerHeight: PropTypes.number,
  timelineVisualWidth: PropTypes.number,
  isOpen: PropTypes.bool
}

export default Timeline
