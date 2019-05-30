import PropTypes from 'prop-types'
import React, { PureComponent, RefObject } from 'react'

import { addListener, removeListener } from '../../utils/events'
import getNumericPropertyValue from '../../utils/getNumericPropertyValue'
import raf from '../../utils/raf'
import Sidebar from '../Sidebar'
import Timeline from '../Timeline'

const noop = () => undefined

interface LayoutProps {
  enableSticky: boolean
  timebar: object[]
  time: object
  tracks: object[]
  now?: Date
  isOpen?: boolean
  toggleTrackOpen?: () => void
  scrollToNow?: boolean
  onLayoutChange: () => void
  sidebarWidth?: number
  timelineViewportWidth?: number
  clickElement?: () => void
  clickTrackButton?: () => void
}

interface LayoutState {
  isSticky: boolean
  headerHeight: number
  scrollLeft: number
}

class Layout extends PureComponent<LayoutProps, LayoutState> {
  public static propTypes = {
    enableSticky: PropTypes.bool.isRequired,
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

  private timeline: RefObject<any>
  private layout: RefObject<any>
  private sidebar: RefObject<any>

  constructor(props: LayoutProps) {
    super(props)

    this.timeline = React.createRef()
    this.layout = React.createRef()
    this.sidebar = React.createRef()

    this.state = {
      isSticky: false,
      headerHeight: 0,
      scrollLeft: 0,
    }
  }

  public componentDidMount() {
    const { enableSticky } = this.props

    if (enableSticky) {
      addListener('scroll', this.handleScrollY)
      this.updateTimelineHeaderScroll()
      this.updateTimelineBodyScroll()
    }

    addListener('resize', this.handleResize)
    this.handleLayoutChange(() => this.scrollToNow())
  }

  public componentDidUpdate(prevProps: LayoutProps, prevState: LayoutState) {
    const { enableSticky, isOpen } = this.props
    const { isSticky, scrollLeft } = this.state

    if (enableSticky && isSticky) {
      if (!prevState.isSticky) {
        this.updateTimelineHeaderScroll()
      }

      if (scrollLeft !== prevState.scrollLeft) {
        this.updateTimelineBodyScroll()
      }
    }

    if (isOpen !== prevProps.isOpen) {
      this.handleLayoutChange()
    }
  }

  public componentWillUnmount() {
    const { enableSticky } = this.props

    if (enableSticky) {
      removeListener('scroll', this.handleScrollY)
      removeListener('resize', this.handleResize)
    }
  }

  public setHeaderHeight = (headerHeight: number) => {
    this.setState({ headerHeight })
  }

  public scrollToNow = () => {
    const { time, scrollToNow, now, timelineViewportWidth } = this.props
    if (scrollToNow) {
      this.timeline.current.scrollLeft = time.toX(now) - 0.5 * timelineViewportWidth
    }
  }

  public updateTimelineBodyScroll = () => {
    const { scrollLeft } = this.state
    this.timeline.current.scrollLeft = scrollLeft
  }

  public updateTimelineHeaderScroll = () => {
    const { scrollLeft } = this.timeline.current
    this.setState({ scrollLeft })
  }

  public handleHeaderScrollY = (scrollLeft: number) => {
    raf(() => {
      this.setState({ scrollLeft })
    })
  }

  public handleScrollY = () => {
    raf(() => {
      const { headerHeight } = this.state
      const markerHeight = 0
      const { top, bottom } = this.timeline.current.getBoundingClientRect()
      const isSticky = top <= -markerHeight && bottom >= headerHeight
      this.setState(() => ({ isSticky }))
    })
  }

  public handleScrollX = () => {
    raf(this.updateTimelineHeaderScroll)
  }

  public calculateSidebarWidth = () =>
    this.sidebar.current.offsetWidth + getNumericPropertyValue(this.layout.current, 'margin-left')

  public calculateTimelineViewportWidth = () => this.timeline.current.offsetWidth

  public handleLayoutChange = cb => {
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

  public handleResize = () => this.handleLayoutChange()

  public render() {
    const {
      isOpen,
      tracks,
      now,
      time,
      timebar,
      toggleTrackOpen,
      sidebarWidth,
      timelineViewportWidth,
      clickElement,
      clickTrackButton,
    } = this.props

    const { isSticky, headerHeight, scrollLeft } = this.state
    return (
      <div className={`rt-layout ${isOpen ? 'rt-is-open' : ''}`} ref={this.layout}>
        <div className="rt-layout__side" ref={this.sidebar}>
          <Sidebar
            timebar={timebar}
            tracks={tracks}
            toggleTrackOpen={toggleTrackOpen}
            sticky={{ isSticky, headerHeight, sidebarWidth }}
            clickTrackButton={clickTrackButton}
          />
        </div>
        <div className="rt-layout__main">
          <div className="rt-layout__timeline" ref={this.timeline} onScroll={isSticky ? this.handleScrollX : noop}>
            <Timeline
              now={now}
              time={time}
              timebar={timebar}
              tracks={tracks}
              sticky={{
                headerHeight,
                scrollLeft,
                isSticky,
                setHeaderHeight: this.setHeaderHeight,
                viewportWidth: timelineViewportWidth,
                handleHeaderScrollY: this.handleHeaderScrollY,
              }}
              clickElement={clickElement}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Layout
