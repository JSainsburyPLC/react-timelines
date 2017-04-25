import React, { PropTypes } from 'react'

import { getDayMonth } from '../../utils/formatDate'

const Basic = ({ title, start, end, style }) =>
  <div className="element" style={style}>
    <div className="element__content" aria-hidden="true">
      { title }
    </div>
    <div className="element__tooltip">
      <div>{title}</div>
      <div><strong>Start</strong> {getDayMonth(start)}</div>
      <div><strong>End</strong> {getDayMonth(end)}</div>
    </div>
  </div>

Basic.propTypes = {
  title: PropTypes.string,
  start: PropTypes.instanceOf(Date),
  end: PropTypes.instanceOf(Date),
  style: PropTypes.shape({})
}

export default Basic
