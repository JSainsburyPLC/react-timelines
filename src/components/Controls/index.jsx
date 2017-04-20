import React, { PropTypes } from 'react'

import Toggle from './Toggle'

const Controls = ({ isOpen, toggleOpen, zoomIn, zoomOut, zoom }) =>
  <div className="controls">
    <Toggle isOpen={isOpen} toggleOpen={toggleOpen} />
    <button className="controls__button" onClick={zoomIn}>Zoom in</button>
    <button className="controls__button" disabled={zoom <= 1} onClick={zoomOut}>Zoom out</button>
  </div>

Controls.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
  zoom: PropTypes.number.isRequired
}

export default Controls
