import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Tracks from './Tracks'

class Body extends PureComponent {
  render() {
    const { time, tracks, clickElement } = this.props
    return (
      <div className="rt-timeline__body">
        <Tracks time={time} tracks={tracks} clickElement={clickElement} />
      </div>
    )
  }
}

Body.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  clickElement: PropTypes.func
}

export default Body
