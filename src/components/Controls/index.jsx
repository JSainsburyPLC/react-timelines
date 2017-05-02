import React from 'react'
import PropTypes from 'prop-types'

import Toggle from './Toggle'

const Controls = ({
  isOpen = true,
  toggleOpen,
  zoomIn,
  zoomOut,
  zoom,
  zoomMin,
  zoomMax
}) =>
  <div className="controls">
    <div className="controls__content">
      { toggleOpen && <Toggle isOpen={isOpen} toggleOpen={toggleOpen} /> }
      { zoomIn && <button className="controls__button controls__button--zoom-in" disabled={zoomMax && zoom >= zoomMax} onClick={zoomIn}>Zoom in</button> }
      { zoomOut && <button className="controls__button controls__button--zoom-out" disabled={zoomMin && zoom <= zoomMin} onClick={zoomOut}>Zoom out</button> }
    </div>
  </div>

Controls.propTypes = {
  zoom: PropTypes.number.isRequired,
  isOpen: PropTypes.bool,
  toggleOpen: PropTypes.func,
  zoomIn: PropTypes.func,
  zoomOut: PropTypes.func,
  zoomMin: PropTypes.number,
  zoomMax: PropTypes.number
}

export default Controls
