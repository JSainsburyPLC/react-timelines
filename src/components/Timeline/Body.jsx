import React, { PropTypes } from 'react'
import Track from './Track'
import Now from './Now'

const Body = ({ now, time, tracks }) =>
  <div className="timeline__body">
    {
      tracks.map(({ id, elements }) =>
        <Track key={id} time={time} elements={elements} />
      )
    }
    { now && <Now time={time} now={now} /> }
  </div>

Body.propTypes = {
  now: PropTypes.instanceOf(Date),
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Body
