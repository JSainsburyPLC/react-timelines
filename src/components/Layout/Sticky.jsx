import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import Timeline from '../Timeline'

import { addListener, removeListener } from '../../utils/events'
import raf from '../../utils/raf'
import getNumericPropertyValue from '../../utils/getNumericPropertyValue'

class StickyLayout extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isHeaderSticky: false,
      headerHeight: 0,
      markerOffset: 0,
      sidebarWidth: 0,
      timelineViewportWidth: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.setHeaderHeight = this.setHeaderHeight.bind(this)
    this.setSidebarWidth = this.setSidebarWidth.bind(this)
    this.setMarkerOffset = this.setMarkerOffset.bind(this)
    this.setTimelineViewportWidth = this.setTimelineViewportWidth.bind(this)
  }

  componentDidMount() {
    addListener('scroll', this.handleScroll)
    addListener('resize', this.handleResize)
    this.setSidebarWidth()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.setSidebarWidth()
    }
  }

  componentWillUnmount() {
    removeListener('scroll', this.handleScroll)
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

  handleScroll() {
    raf(() => {
      const { markerOffset, headerHeight } = this.state
      const { top, bottom } = this.layoutMain.getBoundingClientRect()
      const isHeaderSticky = (top <= -markerOffset) && (bottom >= headerHeight)
      this.setState(() => ({ isHeaderSticky }))
    })
  }

  handleResize() {
    raf(() => {
      this.setSidebarWidth()
    })
  }

  render() {
    const { isOpen = true, tracks, now, time, timebar, toggleTrackOpen } = this.props
    const { isHeaderSticky, headerHeight, sidebarWidth, timelineViewportWidth } = this.state
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
        <div className="layout__main" ref={(layoutMain) => { this.layoutMain = layoutMain }}>
          <Timeline
            now={now}
            time={time}
            timebar={timebar}
            tracks={tracks}
            isOpen={isOpen}
            sticky={{
              enableStickyHeader: true,
              isHeaderSticky,
              setMarkerOffset: this.setMarkerOffset,
              setHeaderHeight: this.setHeaderHeight,
              setViewportWidth: this.setTimelineViewportWidth,
              viewportWidth: timelineViewportWidth,
              headerHeight
            }}
          />
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
