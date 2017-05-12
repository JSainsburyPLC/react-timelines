import React from 'react'
import { shallow, mount } from 'enzyme'

import ReactTimeline from '../'
import Controls from '../components/Controls'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'
import computedStyle from '../utils/computedStyle'

import { addListener, removeListener } from '../utils/events'
import raf from '../utils/raf'

jest.mock('../utils/computedStyle')

jest.mock('../components/Controls', () => () => null)
jest.mock('../components/Sidebar', () => () => null)
jest.mock('../components/Timeline', () => () => null)
jest.mock('../utils/events')
jest.mock('../utils/raf')

const defaultStart = new Date('2010-01-01')
const defaultEnd = new Date('2030-01-01')

const createScaleProps = ({
  start = defaultStart,
  end = defaultEnd,
  zoom = 1,
  zoomMin = undefined,
  zoomMax = undefined
} = {}) => ({ start, end, zoom, zoomMin, zoomMax })

const createProps = ({
  now = new Date(),
  scale = createScaleProps(),
  isOpen = false,
  timebar = { rows: [] },
  tracks = [],
  toggleOpen = jest.fn(),
  zoomIn = jest.fn(),
  zoomOut = jest.fn(),
  stickyHeader = false
} = {}) => ({ now, scale, isOpen, timebar, tracks, toggleOpen, zoomIn, zoomOut, stickyHeader })

describe('<ReactTimeline />', () => {
  it('renders <Controls />, <Sidebar /> and <Timeline />', () => {
    const props = createProps()
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.find(Controls).exists()).toBe(true)
    expect(wrapper.find(Sidebar).exists()).toBe(true)
    expect(wrapper.find(Timeline).exists()).toBe(true)
  })

  it('renders <Sidebar /> in open state by default', () => {
    const props = { ...createProps(), isOpen: undefined }
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.find('.layout').prop('className')).toMatch('is-open')
  })

  it('renders <Sidebar /> in an open state', () => {
    const props = createProps({ isOpen: true })
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.find('.layout').prop('className')).toMatch('is-open')
  })

  it('renders <Sidebar /> in a closed state', () => {
    const props = createProps({ isOpen: false })
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.find('.layout').prop('className')).not.toMatch('is-open')
  })

  it('re-renders when zoom changes', () => {
    const props = { ...createProps(), scale: createScaleProps({ zoom: 1 }) }
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.state('time').zoom).toBe(1)

    const nextProps = { ...props, scale: createScaleProps({ zoom: 2 }) }

    wrapper.setProps(nextProps)
    expect(wrapper.state('time').zoom).toBe(2)

    wrapper.setProps(nextProps)
    expect(wrapper.state('time').zoom).toBe(2)
  })

  describe('sticky header', () => {
    it('is sticky when top of window is within the timeline', () => {
      const listeners = {}
      addListener.mockImplementation((evt, fun) => { listeners[evt] = fun })
      removeListener.mockImplementation(jest.fn())
      raf.mockImplementation(fn => fn())

      computedStyle.mockImplementation(node => ({
        getPropertyValue(prop) {
          return node.style[prop]
        }
      }))

      const props = createProps({ stickyHeader: true })
      const wrapper = mount(<ReactTimeline {...props} />)
      expect(typeof listeners.scroll).toEqual('function')

      wrapper.instance().getMarkerOffset({
        style: { 'padding-top': '40px' }
      })
      wrapper.instance().getHeaderHeight({
        offsetHeight: 50
      })
      wrapper.instance().layoutMain.getBoundingClientRect = () => ({
        top: -60,
        bottom: 100
      })
      listeners.scroll()
      expect(wrapper.state()).toMatchObject({
        isHeaderSticky: true
      })

      wrapper.instance().layoutMain.getBoundingClientRect = () => ({
        top: 10,
        bottom: 100
      })
      listeners.scroll()
      expect(wrapper.state()).toMatchObject({
        isHeaderSticky: false
      })

      wrapper.instance().layoutMain.getBoundingClientRect = () => ({
        top: -60,
        bottom: 20
      })
      listeners.scroll()
      expect(wrapper.state()).toMatchObject({
        isHeaderSticky: false
      })

      wrapper.unmount()
      expect(removeListener).toBeCalled()
    })

    it('wont be sticky when stickyHeader prop is false', () => {
      addListener.mockImplementation(jest.fn())
      addListener.mockImplementation(jest.fn())
      const props = createProps({ stickyHeader: false })
      const wrapper = mount(<ReactTimeline {...props} />)
      expect(addListener).not.toBeCalled()

      wrapper.unmount()
      expect(removeListener).not.toBeCalled()
    })

    it('ensures the width of the header and sidebar is correct', () => {
      computedStyle.mockImplementation(() => ({
        getPropertyValue: jest.fn()
      }))

      const props = createProps({ stickyHeader: true, isOpen: false })
      const wrapper = mount(<ReactTimeline {...props} />)
      expect(wrapper.state('timelineVisualWidth')).toBe(0)
      wrapper.instance().getSidebarWidth = jest.fn()

      wrapper.instance().getTimelineWidth({ offsetWidth: 200 })
      expect(wrapper.state('timelineVisualWidth')).toBe(200)

      wrapper.setState({ isOpen: false })
    })
  })
})
