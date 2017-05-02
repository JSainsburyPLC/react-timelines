import React, { PropTypes } from 'react'
import elements from '../../Elements'

const TrackElement = (props) => {
  const { type = 'Basic', id, start, end, time } = props
  const Element = elements[type]
  return (
    <div
      key={id}
      className="track__element"
      style={time.toStyleLeftAndWidth(start, end)}
    >
      <Element {...props} />
    </div>
  )
}

TrackElement.propTypes = {
  time: PropTypes.shape({}).isRequired,
  type: PropTypes.string,
  id: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired
}

export default TrackElement
