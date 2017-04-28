import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Timebar from './Timebar'

class Header extends PureComponent {
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
