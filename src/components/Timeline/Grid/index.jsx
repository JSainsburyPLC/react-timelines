import React from 'react'
import PropTypes from 'prop-types'

import Cell from './Cell'

const VerticalGrid = ({ time, cells }) =>
  <div className="rt-grid">
    {cells.map(({ id, start, end }) => <Cell key={id} time={time} start={start} end={end} />)}
  </div>

VerticalGrid.propTypes = {
  time: PropTypes.shape({}).isRequired,
  cells: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default VerticalGrid
