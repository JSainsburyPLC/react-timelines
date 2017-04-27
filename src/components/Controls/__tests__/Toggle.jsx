import React from 'react'
import { shallow } from 'enzyme'

import Toggle from '../Toggle'

describe('<Toggle />', () => {
  it('renders a button with the text "Close" when "isOpen" prop is set to true', () => {
    const wrapper = shallow(<Toggle toggleOpen={jest.fn()} isOpen />)
    expect(wrapper.text()).toBe('Close')
  })

  it('renders a button with the text "Open" when "isOpen" prop is set to false', () => {
    const wrapper = shallow(<Toggle toggleOpen={jest.fn()} isOpen={false} />)
    expect(wrapper.text()).toBe('Open')
  })

  it('calls "toggleOpen()" when clicked', () => {
    const toggleOpen = jest.fn()
    const wrapper = shallow(<Toggle toggleOpen={toggleOpen} isOpen />)
    wrapper.simulate('click')
    expect(toggleOpen).toBeCalled()
  })
})
