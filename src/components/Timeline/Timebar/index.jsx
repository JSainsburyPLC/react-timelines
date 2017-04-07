import React, { PropTypes } from 'react'
import Row from './Row'

const Timebar = ({ time, rows }) =>
  <div className="timebar">
    {
      rows.map(({ id, title, cells }) =>
        <Row key={id} time={time} title={title} cells={cells} />)
    }
  </div>

Timebar.propTypes = {
  time: PropTypes.shape({}).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}

export default Timebar
