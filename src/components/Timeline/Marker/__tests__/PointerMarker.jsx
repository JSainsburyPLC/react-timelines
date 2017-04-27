import React from 'react'
import { shallow } from 'enzyme'

import PointerMarker from '../PointerMarker'
import Marker from '../'

describe('<PointerMarker />', () => {
  const props = {
    x: 0,
    text: 'TEST',
    visible: false,
    highlighted: false
  }

  it('renders <Marker />', () => {
    const wrapper = shallow(<PointerMarker {...props} />)
    expect(wrapper.find(Marker).exists()).toBe(true)
  })

  it('renders "text"', () => {
    const wrapper = shallow(<PointerMarker {...props} />)
    expect(wrapper.find('strong').text()).toBe('TEST')
  })
})
