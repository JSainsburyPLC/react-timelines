import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Controls from './components/Controls'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'
import createTime from './utils/time'

class Container extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: createTime(props.scale),
      shouldHeaderBeSticky: false,
      headerHeight: 0,
      markerOffset: 0,
      sidebarWidth: 0
    }

    this.handleScroll = this.handleScroll.bind(this)
    this.getHeaderHeight = this.getHeaderHeight.bind(this)
    this.getMarkerOffset = this.getMarkerOffset.bind(this)
    this.getSidebarWidth = this.getSidebarWidth.bind(this)
  }

  componentDidMount() {
    if (this.props.stickyHeader) {
      window.addEventListener('scroll', this.handleScroll)
      this.getSidebarWidth()
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scale !== this.props.scale) {
      this.setState({ time: createTime(nextProps.scale) })
    }
  }

  componentWillUnmount() {
    if (this.props.stickyHeader) {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }

  getSidebarWidth() {
    this.setState({
      sidebarWidth: this.sidebar.offsetWidth
    })
  }

  getHeaderHeight(header) {
    this.setState(() => ({
      headerHeight: header.offsetHeight
    }))
  }

  getMarkerOffset(node) {
    const markerOffset = parseInt(getComputedStyle(node, null).getPropertyValue('padding-top'), 10)
    this.setState(() => ({ markerOffset }))
  }

  handleScroll() {
    requestAnimationFrame(() => {
      const { markerOffset, headerHeight } = this.state
      const { top, bottom } = this.tracker.getBoundingClientRect()
      const shouldHeaderBeSticky = (top <= -markerOffset) && (bottom >= headerHeight)
      if (this.props.stickyHeader) {
        this.setState(() => ({ shouldHeaderBeSticky }))
      }
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
      scale
    } = this.props
    const { time, shouldHeaderBeSticky, headerHeight, sidebarWidth } = this.state
    return (
      <div className="react-timelines" ref={(tracker) => { this.tracker = tracker }}>
        <Controls
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          zoom={scale.zoom}
          zoomMin={scale.zoomMin}
          zoomMax={scale.zoomMax}
        />
        <div className={`layout ${isOpen ? 'is-open' : ''}`}>
          <div className="layout__side" ref={(sidebar) => { this.sidebar = sidebar }}>
            <Sidebar
              timebar={timebar}
              tracks={tracks}
              toggleTrackOpen={toggleTrackOpen}
              shouldHeaderBeSticky={shouldHeaderBeSticky}
              headerHeight={headerHeight}
              width={sidebarWidth}
            />
          </div>
          <div className="layout__main">
            <Timeline
              now={now}
              time={time}
              timebar={timebar}
              tracks={tracks}
              getMarkerOffset={this.getMarkerOffset}
              getHeaderHeight={this.getHeaderHeight}
              shouldHeaderBeSticky={shouldHeaderBeSticky}
              headerHeight={headerHeight}
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
