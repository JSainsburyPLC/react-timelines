import React, { PropTypes } from 'react'

const Cell = ({ time, id, title, start, end }) =>
  <div
    className="timebar__cell"
    style={time.toStyleLeftAndWidth(start, end)}
  >
    {title}
  </div>

Cell.propTypes = {
  time: PropTypes.shape({}),
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired
}

export default Cell
