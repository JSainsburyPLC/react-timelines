import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Body from './Body'
import { propTypeTimebar } from '../../propTypes'

const Sidebar = ({
  timebar,
  tracks,
  toggleTrackOpen,
  sticky: { isHeaderSticky, headerHeight, width } = {}
}) =>
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
  sticky: PropTypes.shape({})
}

export default Sidebar
