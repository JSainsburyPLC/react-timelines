import React, { PropTypes } from 'react'

const Toggle = ({ toggleOpen, isOpen }) =>
  <button className={`controls__button controls__button--toggle ${isOpen ? 'controls__button--toggle-close' : 'controls__button--toggle-open'}`} onClick={toggleOpen}>
    {isOpen ? 'Close' : 'Open'}
  </button>

Toggle.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Toggle
