import PropTypes from 'prop-types'
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

Sidebar.propTypes = {
  timebar: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  sticky: PropTypes.shape({}),
  clickTrackButton: PropTypes.func,
}

export default Sidebar
