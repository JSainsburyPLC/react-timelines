import React from 'react'
import PropTypes from 'prop-types'

const Toggle = ({ toggleOpen, isOpen }) =>
  <button
    className={`rt-controls__button rt-controls__button--toggle ${isOpen ? 'rt-controls__button--toggle-close' : 'rt-controls__button--toggle-open'}`}
    onClick={toggleOpen}
  >
    {isOpen ? 'Close' : 'Open'}
  </button>

Toggle.propTypes = {
  toggleOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Toggle
