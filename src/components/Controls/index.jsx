import React, { PropTypes } from 'react'

import Toggle from './Toggle'

const Controls = ({ isOpen, toggleOpen, zoomIn, zoomOut, scaleFactor }) =>
  <div className="controls">
    <Toggle isOpen={isOpen} toggleOpen={toggleOpen} />
    <button className="controls__button controls__button--zoom-in" onClick={zoomIn}>Zoom in</button>
    <button className="controls__button controls__button--zoom-out" disabled={scaleFactor <= 1} onClick={zoomOut}>Zoom out</button>
  </div>

Controls.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired,
  zoomIn: PropTypes.func.isRequired,
  zoomOut: PropTypes.func.isRequired,
  scaleFactor: PropTypes.number.isRequired
}

export default Controls
