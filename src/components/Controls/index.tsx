import React, { FunctionComponent } from 'react'

import Toggle from './Toggle'
import ZoomIn from './ZoomIn'
import ZoomOut from './ZoomOut'

interface ControlsProps {
  zoom: number
  isOpen?: boolean
  toggleOpen?: () => void
  zoomIn?: () => void
  zoomOut?: () => void
  zoomMin?: number
  zoomMax?: number
}

const Controls: FunctionComponent<ControlsProps> = ({
  isOpen = true,
  toggleOpen,
  zoomIn,
  zoomOut,
  zoom,
  zoomMin,
  zoomMax,
}) => (
  <div className="rt-controls">
    <div className="rt-controls__content">
      {toggleOpen && <Toggle isOpen={isOpen} toggleOpen={toggleOpen} />}
      {zoomIn && <ZoomIn zoomIn={zoomIn} zoomMax={zoomMax} zoom={zoom} />}
      {zoomOut && <ZoomOut zoomOut={zoomOut} zoomMin={zoomMin} zoom={zoom} />}
    </div>
  </div>
)

export default Controls
export { ControlsProps }
