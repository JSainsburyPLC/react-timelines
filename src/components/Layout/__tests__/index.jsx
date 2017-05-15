import React from 'react'
import { shallow } from 'enzyme'

import Layout from '../Sticky'
import Sidebar from '../../Sidebar'
import Timeline from '../../Timeline'

const createProps = ({
  timebar = { rows: [] },
  time = {
    fromX: jest.fn(() => new Date()),
    toX: jest.fn(() => 0)
  },
  tracks = [],
  now = new Date(),
  isOpen = false,
  toggleTrackOpen = jest.fn()
} = {}) => ({ timebar, time, tracks, now, isOpen, toggleTrackOpen })

describe('<Layout />', () => {
  it('renders <Sidebar /> and <Timeline />', () => {
    const props = createProps()
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper.find(Sidebar).exists()).toBe(true)
    expect(wrapper.find(Timeline).exists()).toBe(true)
  })

  it('renders <Sidebar /> in an open state', () => {
    const props = createProps({ isOpen: true })
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper.find('.layout').prop('className')).toMatch('is-open')
  })

  it('renders <Sidebar /> in a closed state', () => {
    const props = createProps({ isOpen: false })
    const wrapper = shallow(<Layout {...props} />)
    expect(wrapper.find('.layout').prop('className')).not.toMatch('is-open')
  })
})
