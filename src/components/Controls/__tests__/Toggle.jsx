import React from 'react'
import { shallow } from 'enzyme'

import Toggle from '../Toggle'

describe('<Toggle />', () => {
  it('displays "Close" when open', () => {
    const wrapper = shallow(<Toggle toggleOpen={jest.fn()} isOpen />)
    expect(wrapper.text()).toMatch('Close')
  })

  it('displays "Open" when closed', () => {
    const wrapper = shallow(<Toggle toggleOpen={jest.fn()} isOpen={false} />)
    expect(wrapper.text()).toMatch('Open')
  })

  it('calls "toggleOpen()" when clicked', () => {
    const toggleOpen = jest.fn()
    const wrapper = shallow(<Toggle toggleOpen={toggleOpen} isOpen />)
    wrapper.simulate('click')
    expect(toggleOpen).toBeCalled()
  })
})
