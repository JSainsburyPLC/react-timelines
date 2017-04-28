import React from 'react'
import PropTypes from 'prop-types'

import Marker from './'

const PointerMarker = ({ x, text, visible, highlighted }) =>
  <Marker modifier="pointer" x={x} visible={visible} highlighted={highlighted}>
    <div>
      <div><strong>{text}</strong></div>
    </div>
  </Marker>

PointerMarker.propTypes = {
  x: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  visible: PropTypes.bool,
  highlighted: PropTypes.bool
}

export default PointerMarker
