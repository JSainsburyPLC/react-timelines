import React, { PureComponent, RefObject } from 'react'

import Timebar from './Timebar'

const noop = () => undefined

interface HeaderProps {
  time: any
  onMove: any
  onEnter: any
  onLeave: any
  width: any
  timebar: any
  sticky?: {
    isSticky: any
    headerHeight: any
    viewportWidth: any
    scrollLeft: number
    setHeaderHeight: (height: number) => void
    handleHeaderScrollY: (y: number) => void
  }
}

class Header extends PureComponent<HeaderProps> {
  private scroll: RefObject<any>
  private timebar: RefObject<any>

  constructor(props: HeaderProps) {
    super(props)

    this.scroll = React.createRef()
    this.timebar = React.createRef()
  }

  public componentDidMount() {
    const { sticky } = this.props
    if (sticky) {
      sticky.setHeaderHeight(this.timebar.current.offsetHeight)
      const { scrollLeft, isSticky } = sticky
      if (isSticky) {
        this.scroll.current.scrollLeft = scrollLeft
      }
    }
  }

  public componentDidUpdate(prevProps: HeaderProps) {
    const { sticky } = this.props

    if (sticky && prevProps.sticky) {
      const { scrollLeft, isSticky } = sticky
      const prevScrollLeft = prevProps.sticky.scrollLeft
      const prevIsSticky = prevProps.sticky.isSticky
      if (scrollLeft !== prevScrollLeft || isSticky !== prevIsSticky) {
        this.scroll.current.scrollLeft = scrollLeft
      }
    }
  }

  public handleScroll = () => {
    const { sticky } = this.props

    if (sticky) {
      sticky.handleHeaderScrollY(this.scroll.current.scrollLeft)
    }
  }

  public render() {
    const { time, onMove, onEnter, onLeave, width, timebar: rows, sticky = {} as any } = this.props
    const { isSticky, headerHeight, viewportWidth } = sticky

    return (
      <div
        style={isSticky ? { paddingTop: headerHeight } : {}}
        onMouseMove={onMove}
        onMouseEnter={onEnter}
        onMouseLeave={onLeave}
      >
        <div
          className={`rt-timeline__header ${isSticky ? 'rt-is-sticky' : ''}`}
          style={isSticky ? { width: viewportWidth, height: headerHeight } : {}}
        >
          <div className="rt-timeline__header-scroll" ref={this.scroll} onScroll={isSticky ? this.handleScroll : noop}>
            <div ref={this.timebar} style={isSticky ? { width } : {}}>
              <Timebar time={time} rows={rows} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
