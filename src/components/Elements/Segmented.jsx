import React, { PropTypes } from 'react'

const Segment = ({ time, offsetX, start, end, style }) => {
  const left = time.toX(start) - offsetX
  const width = time.toX(end) - left - offsetX
  const segmentStyle = {
    ...style,
    left,
    width
  }
  return (
    <div className="segmented__segment" style={segmentStyle} />
  )
}

Segment.propTypes = {
  time: PropTypes.shape({}).isRequired,
  offsetX: PropTypes.number.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.shape({})
}

// eslint-disable-next-line no-unused-vars
const Segmented = ({ time, title, start, end, tooltip, segments }) => {
  const offsetX = time.toX(start)
  return (
    <div className="element segmented">
      {
        segments.map(segment =>
          <Segment
            key={segment.id}
            {...segment}
            offsetX={offsetX}
            time={time}
          />
        )
      }
      <div className="element__title">
        { title }
      </div>
    </div>
  )
}

Segmented.propTypes = {
  time: PropTypes.shape({}).isRequired,
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  tooltip: PropTypes.string,
  segments: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired })
  ).isRequired
}

export default Segmented
