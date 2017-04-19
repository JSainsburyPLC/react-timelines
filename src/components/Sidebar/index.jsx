import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'

const Sidebar = ({ timebar, tracks }) =>
  <div className="sidebar">
    <Header timebar={timebar} />
    <Body tracks={tracks} />
  </div>

Sidebar.propTypes = {
  timebar: PropTypes.shape({}),
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Sidebar
