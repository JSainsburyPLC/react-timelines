import React, { FunctionComponent } from 'react'

import Marker from '.'
import { getDayMonth } from '../../../utils/formatDate'
import { Time } from '../../../utils/time'

interface NowMarkerProps {
  now: Date
  time: Time
  visible?: boolean
  highlighted?: boolean
}

const NowMarker: FunctionComponent<NowMarkerProps> = ({ now, time, visible, highlighted }) => (
  <Marker modifier="now" x={time.toX(now)} visible={visible} highlighted={highlighted}>
    <div>
      <div>Today</div>
      <strong>{getDayMonth(now)}</strong>
    </div>
  </Marker>
)

export default NowMarker
