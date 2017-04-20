import React, { PureComponent, PropTypes } from 'react'
import Tracks from './Tracks'

class Body extends PureComponent {
  render() {
    const { time, tracks } = this.props
    return (
      <div className="timeline__body">
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
