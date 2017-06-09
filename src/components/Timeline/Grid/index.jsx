import React from 'react'
import PropTypes from 'prop-types'

const VerticalGrid = ({ time, cells }) =>
  <div className="rt-grid">
    {cells.map(({ id, start, end }) =>
      <div key={id} className="rt-grid__cell" style={time.toStyleLeftAndWidth(start, end)} />)}
  </div>

VerticalGrid.propTypes = {
  time: PropTypes.shape({}).isRequired,
  cells: PropTypes.arrayOf(PropTypes.shape({
    start: PropTypes.instanceOf(Date).isRequired,
    end: PropTypes.instanceOf(Date).isRequired
  })).isRequired
}

export default VerticalGrid
