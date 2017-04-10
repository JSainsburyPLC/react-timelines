import React, { PropTypes } from 'react'

const Basic = ({ title, style }) =>
  <div className="element" style={style}>{ title }</div>

Basic.propTypes = {
  title: PropTypes.string,
  style: PropTypes.shape({})
}

export default Basic
