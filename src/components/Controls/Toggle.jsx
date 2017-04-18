import React, { PropTypes } from 'react'

const Toggle = ({ toggleOpen, isOpen }) =>
  <button className="controls__toggle" onClick={toggleOpen}>
    {isOpen ? 'Close' : 'Open'}
  </button>

Toggle.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Toggle
