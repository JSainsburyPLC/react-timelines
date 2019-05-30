import PropTypes from 'prop-types'
import React, { FunctionComponent } from 'react'

import TrackKeys from './TrackKeys'

interface BodyProps {
  tracks: any[]
  toggleTrackOpen: () => void
  clickTrackButton: () => void
}

const Body: FunctionComponent<BodyProps> = ({ tracks, toggleTrackOpen, clickTrackButton }) => (
  <div className="rt-sidebar__body">
    <TrackKeys tracks={tracks} toggleOpen={toggleTrackOpen} clickTrackButton={clickTrackButton} />
  </div>
)

Body.propTypes = {
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  toggleTrackOpen: PropTypes.func,
  clickTrackButton: PropTypes.func,
}

export default Body
export { BodyProps }
