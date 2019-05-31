import React, { CSSProperties, FunctionComponent } from 'react'

import { Time } from '../../../utils/time'
import Cell from './Cell'

interface RowProps {
  time: Time
  style?: CSSProperties
  cells: Array<{
    id: string
    title: string
    start: Date
    end: Date
  }>
}

const Row: FunctionComponent<RowProps> = ({ time, cells, style }) => (
  <div className="rt-timebar__row" style={style}>
    {cells.map(cell => (
      <Cell key={cell.id} time={time} {...cell} />
    ))}
  </div>
)

export default Row
