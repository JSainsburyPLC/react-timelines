import React, { PropTypes } from 'react'

import datePropType from '../../utils/datePropType'
import { getDayMonth } from '../../utils/formatDate'

const Basic = ({ title, start, end, style }) =>
  <div className="element" style={style}>
    <div className="element__content" aria-hidden="true">
      { title }
    </div>
    <div className="element__tooltip">
      <div><strong>Title</strong> {title}</div>
      <div><strong>Start</strong> {getDayMonth(start.toDate())}</div>
      <div><strong>End Date</strong> {getDayMonth(end.toDate())}</div>
    </div>
  </div>

Basic.propTypes = {
  title: PropTypes.string,
  start: datePropType,
  end: datePropType,
  style: PropTypes.shape({})
}

export default Basic
