import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'

const Sidebar = ({ tracks }) =>
  <div className="sidebar">
    <Header />
    <Body tracks={tracks} />
  </div>

Sidebar.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Sidebar
