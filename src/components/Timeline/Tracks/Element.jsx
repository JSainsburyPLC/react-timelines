import React, { PropTypes } from 'react'
import BasicElement from '../../Elements/Basic'

const Element = ({ time, trackStyle, style, id, title, start, end, tooltip }) =>
  <div
    key={id}
    className="track__element"
    style={time.toStyleLeftAndWidth(start, end)}
  >
    <BasicElement
      tooltip={tooltip}
      title={title}
      start={start}
      end={end}
      style={{ ...trackStyle, ...style }}
    />
  </div>

Element.propTypes = {
  time: PropTypes.shape({}).isRequired,
  trackStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  tooltip: PropTypes.string
}

export default Element
