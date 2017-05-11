import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Body from './Body'
import { propTypeTimebar } from '../../propTypes'

const Sidebar = ({ timebar, tracks, toggleTrackOpen, isHeaderSticky, headerHeight, width }) =>
  <div className="sidebar">
    <Header
      timebar={timebar}
      isSticky={isHeaderSticky}
      height={headerHeight}
      width={width}
    />
    <Body tracks={tracks} toggleTrackOpen={toggleTrackOpen} />
  </div>

Sidebar.propTypes = {
  timebar: propTypeTimebar.isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  isHeaderSticky: PropTypes.bool,
  headerHeight: PropTypes.number,
  width: PropTypes.number
}

export default Sidebar
