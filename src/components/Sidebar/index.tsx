import React, { FunctionComponent } from 'react'

import Body, { BodyProps } from './Body'
import Header, { HeaderProps } from './Header'

type SidebarProps = BodyProps & HeaderProps

const Sidebar: FunctionComponent<SidebarProps> = ({ timebar, tracks, toggleTrackOpen, sticky, clickTrackButton }) => (
  <div className="rt-sidebar">
    <Header timebar={timebar} sticky={sticky} />
    <Body tracks={tracks} toggleTrackOpen={toggleTrackOpen} clickTrackButton={clickTrackButton} />
  </div>
)

export default Sidebar
