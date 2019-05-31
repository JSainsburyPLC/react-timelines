import React, { FunctionComponent } from 'react'

import { Time } from '../../../utils/time'

interface CellProps {
  time: Time
  title: string
  start: Date
  end: Date
}

const Cell: FunctionComponent<CellProps> = ({ time, title, start, end }) => (
  <div className="rt-timebar__cell" style={time.toStyleLeftAndWidth(start, end)}>
    {title}
  </div>
)

export default Cell
