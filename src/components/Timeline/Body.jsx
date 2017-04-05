import React from 'react'
import Track from './Track'

const Body = () =>
  <div className="timeline__body">
    <Track elements={[{ left: 100 }, { left: 200 }]} />
    <Track elements={[{ left: 300 }, { left: 400 }]} />
  </div>

export default Body
