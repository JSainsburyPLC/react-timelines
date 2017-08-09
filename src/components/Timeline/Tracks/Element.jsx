import React from 'react'
import PropTypes from 'prop-types'

import BasicElement from '../../Elements/Basic'

const Element = (props, context) => {
  const { time, style, id, title, start, end, classes, dataSet, tooltip } = props
  const { clickElement } = context
  const handleClick = () => {
    clickElement(props)
  }
  const elementStyle = {
    ...time.toStyleLeftAndWidth(start, end),
    ...clickElement ? { cursor: 'pointer' } : {}
  }
  return (
    // eslint-disable-next-line jsx-a11y/no-static-element-interactions
    <div
      key={id}
      className="rt-track__element"
      style={elementStyle}
      onClick={clickElement && handleClick}
    >
      <BasicElement
        title={title}
        start={start}
        end={end}
        style={{ ...style }}
        classes={classes}
        dataSet={dataSet}
        tooltip={tooltip}
      />
    </div>
  )
}

Element.propTypes = {
  time: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
  classes: PropTypes.arrayOf(PropTypes.string.isRequired),
  dataSet: PropTypes.shape({}),
  id: PropTypes.string.isRequired,
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  tooltip: PropTypes.string
}

Element.contextTypes = {
  clickElement: PropTypes.func
}

export default Element
