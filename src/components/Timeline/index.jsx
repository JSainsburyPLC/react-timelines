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
import getNumericPropertyValue from '../../utils/getNumericPropertyValue'

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
      this.props.setMarkerOffset(getNumericPropertyValue(this.timeline, 'padding-top'))
      this.props.setViewportWidth(this.timeline.offsetWidth)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.isHeaderSticky !== nextProps.isHeaderSticky) {
      const scrollLeft = this.timeline.scrollLeft
      this.setState({ scrollLeft })
    }
  }

  componentDidUpdate(prevProps) {
    const { isOpen, setViewportWidth, stickyHeader } = this.props
    if (stickyHeader && prevProps.isOpen !== isOpen) {
      setViewportWidth(this.timeline.offsetWidth)
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
      this.props.setViewportWidth(this.timeline.offsetWidth)
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
      viewportWidth,
      setHeaderHeight,
      stickyHeader
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
              stickyHeader={stickyHeader}
              isSticky={isHeaderSticky}
              height={headerHeight}
              viewportWidth={viewportWidth}
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
  setHeaderHeight: PropTypes.func,
  setMarkerOffset: PropTypes.func,
  setViewportWidth: PropTypes.func,
  isHeaderSticky: PropTypes.bool,
  stickyHeader: PropTypes.bool,
  headerHeight: PropTypes.number,
  viewportWidth: PropTypes.number,
  isOpen: PropTypes.bool
}

export default Timeline
