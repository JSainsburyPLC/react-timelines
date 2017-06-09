import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Tracks from './Tracks'
import Grid from './Grid'

class Body extends PureComponent {
  render() {
    const { time, timebar, tracks, clickElement } = this.props
    return (
      <div className="rt-timeline__body">
        <Grid time={time} timebar={timebar} />
        <Tracks time={time} tracks={tracks} clickElement={clickElement} />
      </div>
    )
  }
}

Body.propTypes = {
  time: PropTypes.shape({}).isRequired,
  timebar: PropTypes.PropTypes.arrayOf(PropTypes.shape({})),
  tracks: PropTypes.arrayOf(PropTypes.shape({})),
  clickElement: PropTypes.func
}

export default Body
