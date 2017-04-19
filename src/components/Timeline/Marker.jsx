import React, { PropTypes } from 'react'
import datePropType from '../../utils/datePropType'

const Marker = ({ time, date, children }) =>
  <div className="marker" style={time.toStyleLeft(date)}>
    <div className="marker__label">
      <div className="marker__content">
        {children}
      </div>
    </div>
  </div>

Marker.propTypes = {
  time: PropTypes.shape({}).isRequired,
  date: datePropType,
  children: PropTypes.node
}

export default Marker
