import React from 'react'
import { shallow } from 'enzyme'

import ReactTimeline from '../'
import Controls from '../components/Controls'
import Layout from '../components/Layout'
import StickyLayout from '../components/Layout/Sticky'

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
  isOpen = undefined,
  timebar = { rows: [] },
  tracks = [],
  toggleOpen = jest.fn(),
  zoomIn = jest.fn(),
  zoomOut = jest.fn(),
  enableSticky = false
} = {}) => ({
  now,
  scale,
  isOpen,
  timebar,
  tracks,
  toggleOpen,
  zoomIn,
  zoomOut,
  enableSticky
})

describe('<ReactTimeline />', () => {
  it('renders <Controls />', () => {
    const props = createProps()
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.find(Controls).exists()).toBe(true)
  })

  it('renders <StickyLayout /> when sticky header is enabled', () => {
    const props = createProps({ enableSticky: true })
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.find(StickyLayout).exists()).toBe(true)
    expect(wrapper.find(Layout).exists()).toBe(false)
  })

  it('renders <Layout /> when sticky header is not enabled', () => {
    const props = createProps({ enableSticky: false })
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.find(Layout).exists()).toBe(true)
    expect(wrapper.find(StickyLayout).exists()).toBe(false)
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

  it('renders the sidebar open by default', () => {
    const props = createProps()
    const wrapper = shallow(<ReactTimeline {...props} />)
    expect(wrapper.find(Controls).prop('isOpen')).toBe(true)
  })
})
