import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'
import Timebar from '../Timebar'

const createProps = ({
  time = {},
  timebar = { rows: [] },
  onMove = jest.fn(),
  onEnter = jest.fn(),
  onLeave = jest.fn()
} = {}) => ({
  time, timebar, onMove, onEnter, onLeave
})

describe('<Header />', () => {
  it('renders <Timebar />', () => {
    const props = createProps()
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.find(Timebar).exists()).toBe(true)
  })

  it('calls "onMove" on mouse move event', () => {
    const onMove = jest.fn()
    const props = createProps({ onMove })
    const wrapper = shallow(<Header {...props} />)
    wrapper.simulate('mouseMove')
    expect(onMove).toBeCalled()
  })

  it('calls "onEnter" on mouse enter event', () => {
    const onEnter = jest.fn()
    const props = createProps({ onEnter })
    const wrapper = shallow(<Header {...props} />)
    wrapper.simulate('mouseEnter')
    expect(onEnter).toBeCalled()
  })

  it('calls "onLeave" on mouse leave event', () => {
    const onLeave = jest.fn()
    const props = createProps({ onLeave })
    const wrapper = shallow(<Header {...props} />)
    wrapper.simulate('mouseLeave')
    expect(onLeave).toBeCalled()
  })
})
