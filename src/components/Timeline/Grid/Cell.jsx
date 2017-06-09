import React from 'react'
import PropTypes from 'prop-types'

const Cell = ({ time, start, end }) =>
  <div className="rt-grid__cell" style={time.toStyleLeftAndWidth(start, end)} />

Cell.propTypes = {
  time: PropTypes.shape({}).isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired
}

export default Cell
