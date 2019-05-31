import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import Sidebar from '../Sidebar'
import Timeline from '../Timeline'
import { addListener, removeListener } from '../../utils/events'
import getNumericPropertyValue from '../../utils/getNumericPropertyValue'

class Layout extends PureComponent {
  constructor(props) {
    super(props)

    this.timeline = React.createRef()
    this.layout = React.createRef()
    this.sidebar = React.createRef()
  }

  componentDidMount() {
    addListener('resize', this.handleResize)
    this.handleLayoutChange(() => this.scrollToNow())
  }

  componentDidUpdate(prevProps) {
    const { isOpen } = this.props

    if (isOpen !== prevProps.isOpen) {
      this.handleLayoutChange()
    }
  }

  componentWillUnmount() {
    removeListener('resize', this.handleResize)
  }

  scrollToNow = () => {
    const { time, scrollToNow, now, timelineViewportWidth } = this.props
    if (scrollToNow) {
      this.timeline.current.scrollLeft = time.toX(now) - 0.5 * timelineViewportWidth
    }
  }

  calculateSidebarWidth = () =>
    this.sidebar.current.offsetWidth + getNumericPropertyValue(this.layout.current, 'margin-left')

  calculateTimelineViewportWidth = () => this.timeline.current.offsetWidth

  handleLayoutChange = cb => {
    const { sidebarWidth, timelineViewportWidth, onLayoutChange } = this.props

    const nextSidebarWidth = this.calculateSidebarWidth()
    const nextTimelineViewportWidth = this.calculateTimelineViewportWidth()
    if (nextSidebarWidth !== sidebarWidth || nextTimelineViewportWidth !== timelineViewportWidth) {
      onLayoutChange(
        {
          sidebarWidth: this.calculateSidebarWidth(),
          timelineViewportWidth: this.calculateTimelineViewportWidth(),
        },
        cb
      )
    }
  }

  handleResize = () => this.handleLayoutChange()

  render() {
    const { isOpen, tracks, now, time, timebar, toggleTrackOpen, clickElement, clickTrackButton } = this.props

    return (
      <div className={`rt-layout ${isOpen ? 'rt-is-open' : ''}`} ref={this.layout}>
        <div className="rt-layout__side" ref={this.sidebar}>
          <Sidebar
            timebar={timebar}
            tracks={tracks}
            toggleTrackOpen={toggleTrackOpen}
            clickTrackButton={clickTrackButton}
          />
        </div>
        <div className="rt-layout__main">
          <div className="rt-layout__timeline" ref={this.timeline}>
            <Timeline now={now} time={time} timebar={timebar} tracks={tracks} clickElement={clickElement} />
          </div>
        </div>
      </div>
    )
  }
}

Layout.propTypes = {
  timebar: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  time: PropTypes.shape({}).isRequired,
  tracks: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  now: PropTypes.instanceOf(Date),
  isOpen: PropTypes.bool,
  toggleTrackOpen: PropTypes.func,
  scrollToNow: PropTypes.bool,
  onLayoutChange: PropTypes.func.isRequired,
  sidebarWidth: PropTypes.number,
  timelineViewportWidth: PropTypes.number,
  clickElement: PropTypes.func,
  clickTrackButton: PropTypes.func,
}

export default Layout
