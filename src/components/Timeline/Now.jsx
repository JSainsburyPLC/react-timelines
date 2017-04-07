import React, { PropTypes } from 'react'

const Now = ({ time, now }) =>
  <div className="timeline__time" style={time.toStyleLeft(now)} />

Now.propTypes = {
  time: PropTypes.shape({}).isRequired,
  now: PropTypes.instanceOf(Date).isRequired
}

export default Now
