import React, { PropTypes, Component } from 'react'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'
import createTime from './utils/time'

class Container extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: createTime(props.time)
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.time !== this.props.time) {
      this.setState({ time: createTime(nextProps.time) })
    }
  }

  render() {
    return (
      <div className="ln-timeline">
        <div className="layout">
          <div className="layout__side">
            <Sidebar />
          </div>
          <div className="layout__main">
            <Timeline
              time={this.state.time}
              timebar={this.props.timebar}
              tracks={this.props.tracks}
            />
          </div>
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Container
