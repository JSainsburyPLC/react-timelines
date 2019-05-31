import React, { FunctionComponent } from 'react'

import BasicElement from '../../Elements/Basic'

interface ElementProps {
  time: any
  style: any
  title: any
  start: any
  end: any
  classes: any
  dataSet: any
  tooltip: any
  clickElement: any
}

const Element: FunctionComponent<ElementProps> = props => {
  const { time, style, title, start, end, classes, dataSet, tooltip, clickElement } = props

  const handleClick = () => {
    clickElement(props)
  }
  const elementStyle = {
    ...time.toStyleLeftAndWidth(start, end),
    ...(clickElement ? { cursor: 'pointer' } : {}),
  }

  return (
    <div className="rt-track__element" style={elementStyle} onClick={clickElement && handleClick && handleClick}>
      <BasicElement
        title={title}
        start={start}
        end={end}
        style={style}
        classes={classes}
        dataSet={dataSet}
        tooltip={tooltip}
      />
    </div>
  )
}

export default Element
