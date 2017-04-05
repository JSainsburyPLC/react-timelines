import React, { PropTypes } from 'react'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'

const Component = ({ time, tracks }) =>
  <div className="ln-timeline">
    <div className="layout">
      <div className="layout__side">
        <Sidebar />
      </div>
      <div className="layout__main">
        <Timeline time={time} tracks={tracks} />
      </div>
    </div>
  </div>

Component.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Component
