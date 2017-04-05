import React from 'react'
import Sidebar from './components/Sidebar'
import Timeline from './components/Timeline'

export default () =>
  <div className="ln-timeline">
    <div className="layout">
      <div className="layout__side">
        <Sidebar />
      </div>
      <div className="layout__main">
        <Timeline />
      </div>
    </div>
  </div>
