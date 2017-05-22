import React from 'react'
import Sidebar from '../Sidebar'
import Timeline from '../Timeline'
import propTypes from './propTypes'

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

Layout.propTypes = propTypes

export default Layout
