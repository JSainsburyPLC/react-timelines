import React from 'react'
import { shallow } from 'enzyme'

import ReactTimeline from '../'
import Controls from '../components/Controls'
import Sidebar from '../components/Sidebar'
import Timeline from '../components/Timeline'

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
  zoomOut = jest.fn()
} = {}) => ({ now, scale, isOpen, timebar, tracks, toggleOpen, zoomIn, zoomOut })

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
})
