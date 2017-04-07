import React, { PropTypes } from 'react'

const Element = ({ title, style }) =>
  <div className="element" style={style}>{ title }</div>

Element.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape({})
}

export default Element
