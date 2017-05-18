import React, { PureComponent } from 'react'
import Sidebar from '../Sidebar'
import Timeline from '../Timeline'
import propTypes from './propTypes'
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

    this.handleScrollX = this.handleScrollX.bind(this)
    this.handleScrollY = this.handleScrollY.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.setHeaderHeight = this.setHeaderHeight.bind(this)
    this.setSidebarWidth = this.setSidebarWidth.bind(this)
    this.setMarkerOffset = this.setMarkerOffset.bind(this)
    this.setTimelineViewportWidth = this.setTimelineViewportWidth.bind(this)
    this.setTimelineHeaderScroll = this.setTimelineHeaderScroll.bind(this)
  }

  componentDidMount() {
    addListener('scroll', this.handleScrollY)
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
    removeListener('scroll', this.handleScrollY)
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

  handleScrollY() {
    raf(() => {
      const { markerOffset, headerHeight } = this.state
      const { top, bottom } = this.timeline.getBoundingClientRect()
      const isHeaderSticky = (top <= -markerOffset) && (bottom >= headerHeight)
      this.setState(() => ({ isHeaderSticky }))
    })
  }

  handleScrollX() {
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
          <div className="layout__timeline" ref={(timeline) => { this.timeline = timeline }} onScroll={isHeaderSticky && this.handleScrollX}>
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

StickyLayout.propTypes = propTypes

export default StickyLayout
