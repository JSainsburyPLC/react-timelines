import React, { PropTypes } from 'react'
import datePropType from '../../../utils/datePropType'

const Cell = ({ time, title, start, end }) =>
  <div
    className="timebar__cell"
    style={time.toStyleLeftAndWidth(start, end)}
  >
    {title}
  </div>

Cell.propTypes = {
  time: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
  start: datePropType,
  end: datePropType
}

export default Cell
