import React, { PropTypes } from 'react'

const Cell = ({ time, id, title, start }) =>
  <div
    className="timebar__cell"
    style={time.toStyleLeft(start)}
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
