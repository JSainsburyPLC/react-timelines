import React, { FunctionComponent } from 'react'

import Grid from './Grid'
import Tracks from './Tracks'

interface BodyProps {
  time: any
  grid: any
  tracks: any
  clickElement: any
}

const Body: FunctionComponent<BodyProps> = ({ time, grid, tracks, clickElement }) => (
  <div className="rt-timeline__body">
    {grid && <Grid time={time} grid={grid} />}
    <Tracks time={time} tracks={tracks} clickElement={clickElement} />
  </div>
)

export default Body
