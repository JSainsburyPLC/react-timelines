import React, { Component } from 'react'

import getGrid from '../../utils/getGrid'
import getMouseX from '../../utils/getMouseX'
import Body from './Body'
import Header from './Header'
import NowMarker from './Marker/Now'
import PointerMarker from './Marker/Pointer'

interface TimelineProps {
  now: any
  time: any
  timebar: any
  tracks: any
  sticky: any
  clickElement: any
}

interface TimelineState {
  pointerDate: any
  pointerVisible: any
  pointerHighlighted: any
}

class Timeline extends Component<TimelineProps, TimelineState> {
  constructor(props: TimelineProps) {
    super(props)

    this.state = {
      pointerDate: null,
      pointerVisible: false,
      pointerHighlighted: false,
    }
  }

  public handleMouseMove = (e: MouseEvent) => {
    const { time } = this.props
    this.setState({ pointerDate: time.fromX(getMouseX(e)) })
  }

  public handleMouseLeave = () => {
    this.setState({ pointerHighlighted: false })
  }

  public handleMouseEnter = () => {
    this.setState({ pointerVisible: true, pointerHighlighted: true })
  }

  public render() {
    const { now, time, timebar, tracks, sticky, clickElement } = this.props
    const { pointerDate, pointerVisible, pointerHighlighted } = this.state

    const grid = getGrid(timebar)

    return (
      <div className="rt-timeline" style={{ width: time.timelineWidthStyle }}>
        {now && <NowMarker now={now} visible time={time} />}
        {pointerDate && (
          <PointerMarker date={pointerDate} time={time} visible={pointerVisible} highlighted={pointerHighlighted} />
        )}
        <Header
          time={time}
          timebar={timebar}
          onMove={this.handleMouseMove}
          onEnter={this.handleMouseEnter}
          onLeave={this.handleMouseLeave}
          width={time.timelineWidthStyle}
          sticky={sticky}
        />
        <Body time={time} grid={grid} tracks={tracks} clickElement={clickElement} />
      </div>
    )
  }
}

export default Timeline
