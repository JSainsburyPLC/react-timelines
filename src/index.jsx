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
    const { isOpen, toggleOpen, tracks, now, timebar } = this.props
    const { time } = this.state
    return (
      <div className="react-timeline">
        <Controls isOpen={isOpen} toggleOpen={toggleOpen} />
        <div className={`layout ${isOpen && 'is-open'}`}>
          <div className="layout__side">
            <Sidebar tracks={tracks} />
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
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Container
