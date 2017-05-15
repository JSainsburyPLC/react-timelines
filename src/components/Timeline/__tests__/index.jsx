import React from 'react'
import { shallow } from 'enzyme'

import Timeline from '../'
import Header from '../Header'
import Body from '../Body'
import NowMarker from '../Marker/Now'
import PointerMarker from '../Marker/Pointer'

import getMouseX from '../../../utils/getMouseX'

jest.mock('../../../utils/getMouseX')

const createProps = ({
  now = new Date(),
  time = {
    fromX: jest.fn(() => new Date()),
    toX: jest.fn(() => 0)
  },
  timebar = { rows: [] },
  tracks = [],
  isOpen,
  sticky = {}
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
})
