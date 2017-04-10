import React, { PropTypes } from 'react'
import BasicElement from '../../Elements/Basic'

const Element = ({ time, parentStyle, style, id, title, start, end }) => {
  console.log('style', style)
  console.log('parentStyle', parentStyle)
  return (
    <div
      key={id}
      className="track__element"
      style={time.toStyleLeftAndWidth(start, end)}
    >
      <BasicElement title={title} style={{ ...parentStyle, ...style }} />
    </div>
  )
}

Element.propTypes = {
  time: PropTypes.shape({}).isRequired,
  parentStyle: PropTypes.shape({}),
  style: PropTypes.shape({}),
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date)
}

export default Element
