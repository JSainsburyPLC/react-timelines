import React, { Component, PropTypes } from 'react'
import Tracks from './Tracks'

class Body extends Component {
  shouldComponentUpdate(nextProps) {
    if ((this.props.time !== nextProps.time) && this.props.tracks !== nextProps.tracks) {
      return true
    }
    return false
  }
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
