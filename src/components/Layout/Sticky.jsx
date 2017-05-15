import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import Timeline from '../Timeline'

import { addListener, removeListener } from '../../utils/events'
import raf from '../../utils/raf'
import getNumericPropertyValue from '../../utils/getNumericPropertyValue'

class StickyLayout extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isHeaderSticky: false,
      headerHeight: 0,
      markerOffset: 0,
      sidebarWidth: 0,
      timelineViewportWidth: 0,
      scrollLeft: 0
    }

    this.handleXScroll = this.handleXScroll.bind(this)
    this.handleYScroll = this.handleYScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.setHeaderHeight = this.setHeaderHeight.bind(this)
    this.setSidebarWidth = this.setSidebarWidth.bind(this)
    this.setMarkerOffset = this.setMarkerOffset.bind(this)
    this.setTimelineViewportWidth = this.setTimelineViewportWidth.bind(this)
    this.setTimelineHeaderScroll = this.setTimelineHeaderScroll.bind(this)
  }

  componentDidMount() {
    addListener('scroll', this.handleYScroll)
    addListener('resize', this.handleResize)
    this.setSidebarWidth()
    this.setMarkerOffset(getNumericPropertyValue(this.timeline, 'padding-top'))
    this.setTimelineViewportWidth(this.timeline.offsetWidth)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setSidebarWidth()
    }

    if (this.state.isHeaderSticky && !prevState.isHeaderSticky) {
      this.setTimelineHeaderScroll()
      this.setTimelineViewportWidth(this.timeline.offsetWidth)
    }
  }

  componentWillUnmount() {
    removeListener('scroll', this.handleYScroll)
    removeListener('resize', this.handleResize)
  }

  setSidebarWidth() {
    const layoutOffset = getNumericPropertyValue(this.layout, 'margin-left')
    const sidebarWidth = (this.sidebar.offsetWidth + layoutOffset)
    this.setState({ sidebarWidth })
  }

  setHeaderHeight(headerHeight) {
    this.setState({ headerHeight })
  }

  setMarkerOffset(markerOffset) {
    this.setState({ markerOffset })
  }

  setTimelineViewportWidth(timelineViewportWidth) {
    this.setState({ timelineViewportWidth })
  }

  setTimelineHeaderScroll() {
    const scrollLeft = this.timeline.scrollLeft
    this.setState({ scrollLeft })
  }

  handleYScroll() {
    raf(() => {
      const { markerOffset, headerHeight } = this.state
      const { top, bottom } = this.timeline.getBoundingClientRect()
      const isHeaderSticky = (top <= -markerOffset) && (bottom >= headerHeight)
      this.setState(() => ({ isHeaderSticky }))
    })
  }

  handleXScroll() {
    raf(this.setTimelineHeaderScroll)
  }

  handleResize() {
    raf(() => {
      this.setSidebarWidth()
      this.setTimelineViewportWidth(this.timeline.offsetWidth)
    })
  }

  render() {
    const { isOpen, tracks, now, time, timebar, toggleTrackOpen } = this.props
    const {
      isHeaderSticky,
      headerHeight,
      sidebarWidth,
      timelineViewportWidth,
      scrollLeft
    } = this.state
    return (
      <div className={`layout ${isOpen ? 'is-open' : ''}`} ref={(layout) => { this.layout = layout }}>
        <div className="layout__side" ref={(sidebar) => { this.sidebar = sidebar }}>
          <Sidebar
            timebar={timebar}
            tracks={tracks}
            toggleTrackOpen={toggleTrackOpen}
            sticky={{ isHeaderSticky, headerHeight, width: sidebarWidth }}
          />
        </div>
        <div className="layout__main">
          <div className="layout__timeline" ref={(timeline) => { this.timeline = timeline }} onScroll={isHeaderSticky && this.handleXScroll}>
            <Timeline
              now={now}
              time={time}
              timebar={timebar}
              tracks={tracks}
              sticky={{
                isHeaderSticky,
                setHeaderHeight: this.setHeaderHeight,
                viewportWidth: timelineViewportWidth,
                headerHeight,
                scrollLeft
              }}
            />
          </div>
        </div>
      </div>
    )
  }
}

StickyLayout.propTypes = {
  timebar: PropTypes.shape({}).isRequired,
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date),
  isOpen: PropTypes.bool,
  toggleTrackOpen: PropTypes.func
}

export default StickyLayout
