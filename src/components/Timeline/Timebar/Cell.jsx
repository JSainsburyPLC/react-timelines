import React, { PropTypes } from 'react'

const Cell = ({ time, id, title, start }) =>
  <div
    className="timebar__cell"
    style={{ left: `${time.toX(start)}px` }}
  >
    {title}
  </div>

Cell.propTypes = {
  time: PropTypes.shape({}),
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired
}

export default Cell
