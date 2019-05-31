import React, { FunctionComponent } from 'react'

interface MarkerProps {
  x: any
  modifier: any
  children: any
  visible: any
  highlighted: any
}

const Marker: FunctionComponent<MarkerProps> = ({ x, modifier, children, visible, highlighted }) => (
  <div
    className={`rt-marker rt-marker--${modifier} ${visible ? 'rt-is-visible' : ''} ${
      highlighted ? 'rt-is-highlighted' : ''
    }`}
    style={{ left: `${x}px` }}
  >
    <div className="rt-marker__label">
      <div className="rt-marker__content">{children}</div>
    </div>
  </div>
)

export default Marker
