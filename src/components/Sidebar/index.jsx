import React from 'react'
import PropTypes from 'prop-types'

import Header from './Header'
import Body from './Body'

const Sidebar = ({ timebar, tracks, toggleTrackOpen, shouldHeaderBeSticky, headerHeight, width }) =>
  <div className="sidebar">
    <Header
      timebar={timebar}
      shouldBeSticky={shouldHeaderBeSticky}
      height={headerHeight}
      width={width}
    />
    <Body tracks={tracks} toggleTrackOpen={toggleTrackOpen} />
  </div>

Sidebar.propTypes = {
  timebar: PropTypes.shape({}),
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  shouldHeaderBeSticky: PropTypes.bool,
  headerHeight: PropTypes.number,
  width: PropTypes.number
}

export default Sidebar
