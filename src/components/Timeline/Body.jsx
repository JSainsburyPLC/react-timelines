import React, { PropTypes } from 'react'
import Track from './Track'

const Body = ({ time, tracks }) =>
  <div className="timeline__body">
    {
      tracks.map(({ id, elements }) =>
        <Track key={id} time={time} elements={elements} />
      )
    }
    {/* <Track elements={[{ id: 10, left: 100 }, { id: 20, left: 200 }]} />
    <Track elements={[{ id: 30, left: 300 }, { id: 40, left: 400 }]} /> */}
  </div>

Body.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Body
