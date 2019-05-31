import React, { CSSProperties, FunctionComponent } from 'react'

import { Time } from '../../../utils/time'
import Row from './Row'

interface TimebarProps {
  time: Time
  rows: Array<{
    id: string
    cells: any
    style?: CSSProperties
  }>
}

const Timebar: FunctionComponent<TimebarProps> = ({ time, rows }) => (
  <div className="rt-timebar">
    {rows.map(({ id, cells, style }) => (
      <Row key={id} time={time} cells={cells} style={style} />
    ))}
  </div>
)

export default Timebar
