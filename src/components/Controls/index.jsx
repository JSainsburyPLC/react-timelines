import React, { PropTypes } from 'react'

import Toggle from './Toggle'

const Controls = ({ isOpen, toggleOpen }) =>
  <div className="controls">
    <Toggle {...{ isOpen, toggleOpen }} />
  </div>

Controls.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleOpen: PropTypes.func.isRequired
}

export default Controls
