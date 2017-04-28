import React from 'react'
import { shallow } from 'enzyme'

import Body from '../Body'
import Tracks from '../Tracks'

describe('<Body />', () => {
  it('renders <Tracks />', () => {
    const props = {
      time: {},
      tracks: []
    }
    const wrapper = shallow(<Body {...props} />)
    expect(wrapper.find(Tracks).exists()).toBe(true)
  })
})
