import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Controls from './components/Controls'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'
import createTime from './utils/time'

const getNumericPropertyValue = (node, prop) =>
  parseInt(getComputedStyle(node, null).getPropertyValue(prop), 10)

class Container extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: createTime(props.scale),
      isHeaderSticky: false,
      headerHeight: 0,
      markerOffset: 0,
      sidebarWidth: 0,
      timelineVisualWidth: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.getHeaderHeight = this.getHeaderHeight.bind(this)
    this.getSidebarWidth = this.getSidebarWidth.bind(this)
    this.getMarkerOffset = this.getMarkerOffset.bind(this)
    this.getTimelineWidth = this.getTimelineWidth.bind(this)
  }

  componentDidMount() {
    if (this.props.stickyHeader) {
      window.addEventListener('scroll', this.handleScroll)
      window.addEventListener('resize', this.handleResize)
      this.getSidebarWidth()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scale !== this.props.scale) {
      this.setState({ time: createTime(nextProps.scale) })
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.isOpen !== this.props.isOpen) {
      this.getSidebarWidth()
    }
  }

  componentWillUnmount() {
    if (this.props.stickyHeader) {
      window.removeEventListener('scroll', this.handleScroll)
      window.removeEventListener('resize', this.handleResize)
    }
  }

  getSidebarWidth() {
    const layoutOffset = getNumericPropertyValue(this.layout, 'margin-left')
    const sidebarWidth = (this.sidebar.offsetWidth + layoutOffset)
    this.setState({ sidebarWidth })
  }

  getHeaderHeight(header) {
    this.setState({ headerHeight: header.offsetHeight })
  }

  getMarkerOffset(node) {
    this.setState({ markerOffset: getNumericPropertyValue(node, 'padding-top') })
  }

  getTimelineWidth(node) {
    this.setState({ timelineVisualWidth: node.offsetWidth })
  }

  handleScroll() {
    requestAnimationFrame(() => {
      const { markerOffset, headerHeight } = this.state
      const { top, bottom } = this.layoutMain.getBoundingClientRect()
      const isHeaderSticky = (top <= -markerOffset) && (bottom >= headerHeight)
      if (this.props.stickyHeader) {
        this.setState(() => ({ isHeaderSticky }))
      }
    })
  }

  handleResize() {
    requestAnimationFrame(() => {
      this.getSidebarWidth()
    })
  }

  render() {
    const {
      isOpen = true,
      tracks,
      now,
      timebar,
      toggleOpen,
      toggleTrackOpen,
      zoomIn,
      zoomOut,
      scale,
      stickyHeader
    } = this.props
    const { time, isHeaderSticky, headerHeight, sidebarWidth, timelineVisualWidth } = this.state
    return (
      <div className="react-timelines">
        <Controls
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          zoom={scale.zoom}
          zoomMin={scale.zoomMin}
          zoomMax={scale.zoomMax}
        />
        <div className={`layout ${isOpen ? 'is-open' : ''}`} ref={(layout) => { this.layout = layout }}>
          <div className="layout__side" ref={(sidebar) => { this.sidebar = sidebar }}>
            <Sidebar
              timebar={timebar}
              tracks={tracks}
              toggleTrackOpen={toggleTrackOpen}
              isHeaderSticky={isHeaderSticky}
              headerHeight={headerHeight}
              width={sidebarWidth}
            />
          </div>
          <div className="layout__main" ref={(layoutMain) => { this.layoutMain = layoutMain }}>
            <Timeline
              now={now}
              time={time}
              timebar={timebar}
              tracks={tracks}
              getMarkerOffset={this.getMarkerOffset}
              getHeaderHeight={this.getHeaderHeight}
              getTimelineWidth={this.getTimelineWidth}
              isHeaderSticky={isHeaderSticky}
              stickyHeader={stickyHeader}
              headerHeight={headerHeight}
              timelineVisualWidth={timelineVisualWidth}
              isOpen={isOpen}
            />
          </div>
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  scale: PropTypes.shape({
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    zoom: PropTypes.number.isRequired,
    zoomMin: PropTypes.number,
    zoomMax: PropTypes.number
  }).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  toggleTrackOpen: PropTypes.func,
  zoomIn: PropTypes.func,
  zoomOut: PropTypes.func,
  stickyHeader: PropTypes.bool
}

export default Container
