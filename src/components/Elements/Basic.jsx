import React, { PropTypes } from 'react'

import { getDayMonth } from '../../utils/formatDate'

const Basic = ({ title, start, end, style, tooltip }) =>
  <div className="element" style={style}>
    <div className="element__content" aria-hidden="true">
      { title }
    </div>
    <div className="element__tooltip">
      {
        tooltip
        ? <div>{tooltip}</div>
        : (
          <div>
            <div>{title}</div>
            <div><strong>Start</strong> {getDayMonth(start)}</div>
            <div><strong>End</strong> {getDayMonth(end)}</div>
          </div>
        )
      }
    </div>
  </div>

Basic.propTypes = {
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  style: PropTypes.shape({}),
  tooltip: PropTypes.string
}

export default Basic
