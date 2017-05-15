import React from 'react'
import { shallow, mount } from 'enzyme'

import Timeline from '../'
import Header from '../Header'
import Body from '../Body'
import NowMarker from '../Marker/Now'
import PointerMarker from '../Marker/Pointer'

import getMouseX from '../../../utils/getMouseX'
import raf from '../../../utils/raf'
import { addListener, removeListener } from '../../../utils/events'

jest.mock('../../../utils/getMouseX')
jest.mock('../../../utils/raf')
jest.mock('../../../utils/events')

const createStickyProp = ({
  isHeaderSticky = false,
  setMarkerOffset = jest.fn(),
  setHeaderHeight = jest.fn(),
  setViewportWidth = jest.fn(),
  headerHeight = 0,
  viewportWidth = 0
} = {}) => ({
  isHeaderSticky,
  setMarkerOffset,
  setHeaderHeight,
  setViewportWidth,
  headerHeight,
  viewportWidth
})

const createProps = ({
  now = new Date(),
  time = {
    fromX: jest.fn(() => new Date()),
    toX: jest.fn(() => 0)
  },
  timebar = { rows: [] },
  tracks = [],
  isOpen,
  sticky = undefined
} = {}) => ({
  now,
  time,
  timebar,
  tracks,
  isOpen,
  sticky
})

describe('<Timeline />', () => {
  it('renders <NowMarker />, <PointerMarker />, <Header /> and <Body />', () => {
    const props = createProps()
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.find(NowMarker).exists()).toBe(true)
    expect(wrapper.find(PointerMarker).exists()).toBe(true)
    expect(wrapper.find(Header).exists()).toBe(true)
    expect(wrapper.find(Body).exists()).toBe(true)
  })

  it('does not render <NowMarker /> if "now" is "null"', () => {
    const props = createProps({ now: null })
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.find(NowMarker).exists()).toBe(false)
  })

  it('updates pointer x position when the mouse moves', () => {
    const event = 50
    const props = createProps()
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.state('pointerX')).toBe(0)

    getMouseX.mockImplementation(e => e)
    wrapper.find(Header).prop('onMove')(event)
    expect(wrapper.state('pointerX')).toBe(50)
  })

  it('makes the pointer visible and highlighted when the mouse enters', () => {
    const props = createProps()
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.state('pointerVisible')).toBe(false)
    expect(wrapper.state('pointerHighlighted')).toBe(false)

    wrapper.find(Header).prop('onEnter')()
    expect(wrapper.state('pointerVisible')).toBe(true)
    expect(wrapper.state('pointerHighlighted')).toBe(true)
  })

  it('removes the pointer highlight when the mouse leaves', () => {
    const props = createProps()
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.state('pointerHighlighted')).toBe(false)

    wrapper.find(Header).prop('onEnter')()
    expect(wrapper.state('pointerHighlighted')).toBe(true)

    wrapper.find(Header).prop('onLeave')()
    expect(wrapper.state('pointerHighlighted')).toBe(false)
  })

  it('ensures the header scroll is in sync with the timeline when it is sticky', () => {
    raf.mockImplementation(cb => cb())
    const sticky = createStickyProp({ isHeaderSticky: true })
    const props = createProps({ sticky })
    const wrapper = mount(<Timeline {...props} />)
    expect(wrapper.state('scrollLeft')).toBe(0)
    wrapper.getDOMNode().scrollLeft = 50

    wrapper.simulate('scroll')
    expect(wrapper.state('scrollLeft')).toBe(50)
  })

  it('calls setMarkerOffset() and setViewportWidth() when mounted if the timeline has a sticky header', () => {
    const setMarkerOffset = jest.fn()
    const setViewportWidth = jest.fn()
    const sticky = createStickyProp({ setMarkerOffset, setViewportWidth })
    const props = createProps({ sticky })
    mount(<Timeline {...props} />)
    expect(setMarkerOffset).toBeCalled()
    expect(setViewportWidth).toBeCalled()
  })

  it('adds the resize event listener when mounted if the timeline has a sticky header', () => {
    addListener.mockImplementation(jest.fn())
    const sticky = createStickyProp()
    const props = createProps({ sticky })
    const wrapper = mount(<Timeline {...props} />)
    expect(addListener).toBeCalledWith('resize', wrapper.instance().handleResize)
  })

  it('removes the resize event listener when unmounted if the timeline has a sticky header', () => {
    removeListener.mockImplementation(jest.fn())
    const sticky = createStickyProp()
    const props = createProps({ sticky })
    const wrapper = mount(<Timeline {...props} />)
    const handleResize = wrapper.instance().handleResize
    wrapper.unmount()
    expect(removeListener).toBeCalledWith('resize', handleResize)
  })

  it('does not attempt to remove the resize event listener if the timeline does not have a sticky header', () => {
    removeListener.mockImplementation(jest.fn())

    const props = createProps()
    const wrapper = mount(<Timeline {...props} />)
    wrapper.unmount()
    expect(removeListener).not.toBeCalled()
  })

  it('gets the timeline width during resize events if the timeline has a sticky header', () => {
    addListener.mockImplementation((event, cb) => cb())
    raf.mockImplementation(cb => cb())
    const setViewportWidth = jest.fn()
    const sticky = createStickyProp({ setViewportWidth })
    const props = createProps({ sticky })
    mount(<Timeline {...props} />)
    expect(setViewportWidth).toHaveBeenCalledTimes(2)
  })

  it('gets the timeline width when the user toggles the opening of the nav and the timeline has a sticky header', () => {
    const setViewportWidth = jest.fn()
    const sticky = createStickyProp({ setViewportWidth })
    const props = createProps({ sticky, isOpen: false })
    const wrapper = mount(<Timeline {...props} />)
    expect(setViewportWidth).toHaveBeenCalledTimes(1)

    wrapper.setProps({ isOpen: true })
    expect(setViewportWidth).toHaveBeenCalledTimes(2)
  })

  it('ensures the header gets the correct scroll position when it becomes sticky', () => {
    let sticky = createStickyProp({ isHeaderSticky: false })
    const props = createProps({ sticky })
    const wrapper = mount(<Timeline {...props} />)
    expect(wrapper.state('scrollLeft')).toBe(0)

    wrapper.node.timeline.scrollLeft = 100
    sticky = createStickyProp({ isHeaderSticky: true })
    wrapper.setProps({ sticky })
    expect(wrapper.state('scrollLeft')).toBe(100)
  })
})
