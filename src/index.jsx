import React, { PropTypes, Component } from 'react'

import Controls from './components/Controls'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'
import createTime from './utils/time'

class Container extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: createTime(props.scale)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scale !== this.props.scale) {
      this.setState({ time: createTime(nextProps.scale) })
    }
  }

  render() {
    const { isOpen, toggleOpen, tracks, now, timebar, zoomIn, zoomOut, scale } = this.props
    const { time } = this.state
    return (
      <div className="react-timeline">
        <Controls
          isOpen={isOpen}
          toggleOpen={toggleOpen}
          zoomIn={zoomIn}
          zoomOut={zoomOut}
          scaleFactor={scale.factor}
        />
        <div className={`layout ${isOpen ? 'is-open' : ''}`}>
          <div className="layout__side">
            <Sidebar
              timebar={timebar}
              tracks={tracks}
            />
          </div>
          <div className="layout__main">
            <Timeline
              now={now}
              time={time}
              timebar={timebar}
              tracks={tracks}
            />
          </div>
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  now: PropTypes.instanceOf(Date),
  scale: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired
}

export default Container
