import React from 'react'
import PropTypes from 'prop-types'

import getGridRowCells from '../../../utils/getGridRowCells'

const Grid = ({ time, timebar }) =>
  <div className="rt-grid">
    {getGridRowCells(timebar).map(({ id, start, end }) =>
      <div key={id} className="rt-grid__cell" style={time.toStyleLeftAndWidth(start, end)} />)}
  </div>

Grid.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.arrayOf(PropTypes.shape({
    cells: PropTypes.arrayOf(PropTypes.shape({
      start: PropTypes.instanceOf(Date).isRequired,
      end: PropTypes.instanceOf(Date).isRequired
    }))
  }))
}

export default Grid
