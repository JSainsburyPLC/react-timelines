import React from 'react'
import { shallow } from 'enzyme'

import Timeline from '../'
import Header from '../Header'
import Body from '../Body'
import NowMarker from '../Marker/NowMarker'
import PointerMarker from '../Marker/PointerMarker'

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
})
