import React, { PropTypes } from 'react'
import datePropType from '../../utils/datePropType'

const Now = ({ time, now }) =>
  <div className="timeline__time" style={time.toStyleLeft(now)} />

Now.propTypes = {
  time: PropTypes.shape({}).isRequired,
  now: datePropType
}

export default Now
