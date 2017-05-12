import React from 'react'
import { shallow, mount } from 'enzyme'

import Layout from '../'
import Sidebar from '../../Sidebar'
import Timeline from '../../Timeline'

import computedStyle from '../../../utils/computedStyle'
import { addListener, removeListener } from '../../../utils/events'
import raf from '../../../utils/raf'


jest.mock('../../Sidebar', () => () => null)
jest.mock('../../Timeline', () => () => null)
jest.mock('../../../utils/computedStyle')
jest.mock('../../../utils/events')
jest.mock('../../../utils/raf')

const createProps = ({
  timebar = { rows: [] },
  time = {
    fromX: jest.fn(() => new Date()),
    toX: jest.fn(() => 0)
  },
  tracks = [],
  now = new Date(),
  isOpen = false,
  toggleTrackOpen = jest.fn(),
  stickyHeader = false
} = {}) => ({ timebar, time, tracks, now, isOpen, toggleTrackOpen, stickyHeader })

describe('<Layout />', () => {
  it('renders <Sidebar /> and <Timeline />', () => {
    const props = createProps()
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper.find(Sidebar).exists()).toBe(true)
    expect(wrapper.find(Timeline).exists()).toBe(true)
  })

  it('renders <Sidebar /> in open state by default', () => {
    const props = { ...createProps(), isOpen: undefined }
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper.find('.layout').prop('className')).toMatch('is-open')
  })

  it('renders <Sidebar /> in an open state', () => {
    const props = createProps({ isOpen: true })
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper.find('.layout').prop('className')).toMatch('is-open')
  })

  it('renders <Sidebar /> in a closed state', () => {
    const props = createProps({ isOpen: false })
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper.find('.layout').prop('className')).not.toMatch('is-open')
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
      const wrapper = mount(<Layout {...props} />)
      expect(typeof listeners.scroll).toEqual('function')

      wrapper.instance().setMarkerOffset(40)
      wrapper.instance().setHeaderHeight(50)
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
      const wrapper = mount(<Layout {...props} />)
      expect(addListener).not.toBeCalled()

      wrapper.unmount()
      expect(removeListener).not.toBeCalled()
    })

    it('ensures the width of the header and sidebar is correct', () => {
      computedStyle.mockImplementation(() => ({
        getPropertyValue: jest.fn()
      }))

      const props = createProps({ stickyHeader: true, isOpen: false })
      const wrapper = mount(<Layout {...props} />)
      expect(wrapper.state('timelineViewportWidth')).toBe(0)
      wrapper.instance().setSidebarWidth = jest.fn()

      wrapper.instance().setTimelineViewportWidth(200)
      expect(wrapper.state('timelineViewportWidth')).toBe(200)

      wrapper.setState({ isOpen: false })
    })
  })
})
