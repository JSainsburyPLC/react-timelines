import React, { FunctionComponent } from 'react'

import Marker from '.'
import { getDayMonth } from '../../../utils/formatDate'
import { Time } from '../../../utils/time'

interface PointerMarkerProps {
  time: Time
  date: Date
  visible?: boolean
  highlighted?: boolean
}

const PointerMarker: FunctionComponent<PointerMarkerProps> = ({ time, date, visible, highlighted }) => (
  <Marker modifier="pointer" x={time.toX(date)} visible={visible} highlighted={highlighted}>
    <div>
      <div>
        <strong>{getDayMonth(date)}</strong>
      </div>
    </div>
  </Marker>
)

export default PointerMarker
