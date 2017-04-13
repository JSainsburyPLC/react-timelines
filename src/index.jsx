import React, { PropTypes, Component } from 'react'
import classNames from 'classnames'

import Sidebar from './components/Sidebar'
import SidebarToggle from './components/Sidebar/Toggle'
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
    const { isOpen, toggleIsOpen, tracks, now, timebar } = this.props
    const { time } = this.state
    return (
      <div className="react-timeline">
        <div className={classNames('layout', { 'is-open': isOpen })}>
          <div className="layout__side">
            <Sidebar tracks={tracks} />
          </div>
          <div className="layout__main">
            <Timeline {...{ now, time, timebar, tracks }} />
          </div>
          <SidebarToggle {...{ isOpen, toggleIsOpen }} />
        </div>
      </div>
    )
  }
}

Container.propTypes = {
  now: PropTypes.instanceOf(Date),
  scale: PropTypes.shape({}).isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggleIsOpen: PropTypes.func.isRequired,
  timebar: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Container
