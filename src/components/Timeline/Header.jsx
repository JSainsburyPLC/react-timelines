import React, { PropTypes } from 'react'
import Timebar from './Timebar'

const Header = ({ time, timebar: { rows } }) =>
  <div className="timeline__header">
    <Timebar time={time} rows={rows} />
  </div>

Header.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.shape({}).isRequired
}

export default Header
