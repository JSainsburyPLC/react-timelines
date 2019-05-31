import React, { FunctionComponent } from 'react'

import { Time } from '../../../utils/time'

interface GridProps {
  time: Time
  grid: Array<{
    id: string
    start: Date
    end: Date
  }>
}

const Grid: FunctionComponent<GridProps> = ({ time, grid }) => (
  <div className="rt-grid">
    {grid.map(({ id, start, end }) => (
      <div key={id} className="rt-grid__cell" style={time.toStyleLeftAndWidth(start, end)} />
    ))}
  </div>
)

export default Grid
