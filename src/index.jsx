import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Controls from './components/Controls'
import Layout from './components/Layout'
import createTime from './utils/time'

class Timeline extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: createTime(props.scale)
    }
  }

  getChildContext() {
    const {
      clickElement,
      clickTrackButton
    } = this.props
    return { clickElement, clickTrackButton }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scale !== this.props.scale) {
      this.setState({ time: createTime(nextProps.scale) })
    }
  }


  render() {
    const {
      isOpen = true,
      toggleOpen,
      zoomIn,
      zoomOut,
      scale: { zoom, zoomMin, zoomMax },
      tracks,
      now,
      timebar,
      toggleTrackOpen,
      enableSticky = false,
      scrollToNow
    } = this.props

    return (
      <div className="rt">
        <Controls
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          zoom={zoom}
          zoomMin={zoomMin}
          zoomMax={zoomMax}
        />
        <Layout
          enableSticky={enableSticky}
          now={now}
          tracks={tracks}
          timebar={timebar}
          toggleTrackOpen={toggleTrackOpen}
          scrollToNow={scrollToNow}
          time={this.state.time}
          isOpen={isOpen}
        />
      </div>
    )
  }
}

Timeline.childContextTypes = {
  clickElement: PropTypes.func,
  clickTrackButton: PropTypes.func
}

Timeline.propTypes = {
  scale: PropTypes.shape({
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired,
    zoom: PropTypes.number.isRequired,
    zoomMin: PropTypes.number,
    zoomMax: PropTypes.number
  }),
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  zoomIn: PropTypes.func,
  zoomOut: PropTypes.func,
  clickElement: PropTypes.func,
  clickTrackButton: PropTypes.func,
  timebar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date),
  toggleTrackOpen: PropTypes.func,
  enableSticky: PropTypes.bool,
  scrollToNow: PropTypes.bool
}

export default Timeline
