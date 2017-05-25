import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Tracks from './Tracks'

class Body extends PureComponent {
  render() {
    const { time, tracks } = this.props
    return (
      <div className="rt-timeline__body">
        <Tracks time={time} tracks={tracks} />
      </div>
    )
  }
}

Body.propTypes = {
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({}))
}

export default Body
