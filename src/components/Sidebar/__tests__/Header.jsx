import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

describe('<Header />', () => {
  it('renders the title for each row', () => {
    const timebar = {
      rows: [
        { id: '1', title: 'row-1' },
        { id: '1', title: 'row-2' }
      ]
    }
    const wrapper = shallow(<Header timebar={timebar} />)
    expect(wrapper.find('.timebar-key').first().text()).toBe('row-1')
    expect(wrapper.find('.timebar-key').last().text()).toBe('row-2')
  })
})
