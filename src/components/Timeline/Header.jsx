import React, { PropTypes, Component } from 'react'
import Timebar from './Timebar'

class Header extends Component {
  shouldComponentUpdate(nextProps) {
    if ((this.props.time === nextProps.time) && this.props.timebar === nextProps.timebar) {
      return false
    }
    return true
  }

  render() {
    const { time, timebar: { rows } } = this.props
    return (
      <div className="timeline__header">
        <Timebar time={time} rows={rows} />
      </div>
    )
  }
}

Header.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired
}

export default Header
