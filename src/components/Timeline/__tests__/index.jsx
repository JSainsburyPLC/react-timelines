import React from 'react'
import { shallow } from 'enzyme'

import Timeline from '../'
import Header from '../Header'
import Body from '../Body'
import NowMarker from '../Marker/NowMarker'
import PointerMarker from '../Marker/PointerMarker'

import getMouseX from '../../../utils/getMouseX'

jest.mock('../../../utils/getMouseX')

const createProps = ({
  now = new Date(),
  time = {
    fromX: jest.fn(() => new Date())
  },
  timebar = {},
  tracks = []
} = {}) => ({
  now, time, timebar, tracks
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

  it('updates the pointerX state when handleMouseMove is called', () => {
    const event = 50
    const props = createProps()
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.state('pointerX')).toBe(0)

    getMouseX.mockImplementation(e => e)
    wrapper.find(Header).prop('onMove')(event)
    expect(wrapper.state('pointerX')).toBe(50)
  })

  it('sets "pointerVisible" and "pointerHighlighted" state to "true" when "handleMouseEnter" is called', () => {
    const props = createProps()
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.state('pointerVisible')).toBe(false)
    expect(wrapper.state('pointerHighlighted')).toBe(false)

    wrapper.find(Header).prop('onEnter')()
    expect(wrapper.state('pointerVisible')).toBe(true)
    expect(wrapper.state('pointerHighlighted')).toBe(true)
  })

  it('sets "pointerHighlighted" state to "false" when "handleMouseLeave" is called', () => {
    const props = createProps()
    const wrapper = shallow(<Timeline {...props} />)
    expect(wrapper.state('pointerHighlighted')).toBe(false)

    wrapper.find(Header).prop('onEnter')()
    expect(wrapper.state('pointerHighlighted')).toBe(true)

    wrapper.find(Header).prop('onLeave')()
    expect(wrapper.state('pointerHighlighted')).toBe(false)
  })
})
