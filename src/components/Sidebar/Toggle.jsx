import React, { PropTypes } from 'react'

const Toggle = ({ toggleIsOpen, isOpen }) =>
  <button className="layout__toggle-button" onClick={toggleIsOpen}>
    {isOpen ? '-' : '+'}
  </button>

Toggle.propTypes = {
  toggleIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired
}

export default Toggle
