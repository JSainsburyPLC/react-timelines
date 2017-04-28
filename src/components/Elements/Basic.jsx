import React from 'react'
import PropTypes from 'prop-types'

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
  title: PropTypes.string.isRequired,
  start: PropTypes.instanceOf(Date).isRequired,
  end: PropTypes.instanceOf(Date).isRequired,
  style: PropTypes.shape({}),
  tooltip: PropTypes.string
}

export default Basic
