import React from 'react'
import Track from './Track'

const Body = () =>
  <div className="timeline__body">
    <Track elements={[{ key: 1, left: 100 }, { key: 2, left: 200 }]} />
    <Track elements={[{ key: 3, left: 300 }, { key: 4, left: 400 }]} />
  </div>

export default Body
