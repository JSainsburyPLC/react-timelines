import React, { PropTypes } from 'react'
import Track from './Track'

const Body = ({ time, tracks }) =>
  <div className="timeline__body">
    {
      tracks.map(({ id, elements }) =>
        <Track key={id} time={time} elements={elements} />
      )
    }
  </div>

Body.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Body
