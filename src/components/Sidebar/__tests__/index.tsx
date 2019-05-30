import { shallow } from 'enzyme'
import React from 'react'

import Sidebar from '..'
import Body from '../Body'
import Header from '../Header'

describe('<Sidebar />', () => {
  it('renders <Header /> and <Body />', () => {
    const props = {
      timebar: [],
      tracks: [{}],
      toggleTrackOpen: jest.fn(),
    }
    const wrapper = shallow(<Sidebar {...props} />)
    expect(wrapper.find(Header).exists()).toBe(true)
    expect(wrapper.find(Body).exists()).toBe(true)
  })
})
