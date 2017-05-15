import React from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import Timeline from '../Timeline'

const Layout = ({ isOpen, tracks, now, time, timebar, toggleTrackOpen }) => (
  <div className={`layout ${isOpen ? 'is-open' : ''}`}>
    <div className="layout__side">
      <Sidebar
        timebar={timebar}
        tracks={tracks}
        toggleTrackOpen={toggleTrackOpen}
      />
    </div>
    <div className="layout__main">
      <div className="layout__timeline">
        <Timeline
          now={now}
          time={time}
          timebar={timebar}
          tracks={tracks}
        />
      </div>
    </div>
  </div>
)

Layout.propTypes = {
  timebar: PropTypes.shape({}).isRequired,
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date),
  isOpen: PropTypes.bool,
  toggleTrackOpen: PropTypes.func
}

export default Layout
