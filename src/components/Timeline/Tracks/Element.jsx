import React from 'react'
import PropTypes from 'prop-types'

import BasicElement from '../../Elements/Basic'

const Element = ({ time, style, id, title, start, end, tooltip, classes }) =>
  <div
    key={id}
    className="rt-track__element"
    style={time.toStyleLeftAndWidth(start, end)}
  >
    <BasicElement
      tooltip={tooltip}
      title={title}
      start={start}
      end={end}
      style={{ ...style }}
      classes={classes}
    />
  </div>

Element.propTypes = {
  time: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  tooltip: PropTypes.string
}

export default Element
