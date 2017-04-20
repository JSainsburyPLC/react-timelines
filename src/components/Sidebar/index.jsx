import React, { PropTypes } from 'react'
import Header from './Header'
import Body from './Body'

const Sidebar = ({ timebar, tracks, toggleTrackOpen }) =>
  <div className="sidebar">
    <Header timebar={timebar} />
    <Body tracks={tracks} toggleTrackOpen={toggleTrackOpen} />
  </div>

Sidebar.propTypes = {
  timebar: PropTypes.shape({}),
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func
}

export default Sidebar
