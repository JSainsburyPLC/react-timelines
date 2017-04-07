import React, { PropTypes } from 'react'
import Cell from './Cell'

const Row = ({ time, title, cells }) =>
  <div className="timebar__row">
    {
      cells.map(cell =>
        <Cell key={cell.id} time={time} {...cell} />
      )
    }
  </div>

Row.propTypes = {
  time: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  cells: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Row
