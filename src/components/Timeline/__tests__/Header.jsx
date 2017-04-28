import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'
import Timebar from '../Timebar'

describe('<Header />', () => {
  it('renders <Timebar />', () => {
    const props = {
      time: {},
      timebar: { rows: [] }
    }
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.find(Timebar).exists()).toBe(true)
  })
})
