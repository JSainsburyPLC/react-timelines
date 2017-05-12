import React from 'react'
import { shallow, mount } from 'enzyme'

import Header from '../Header'
import Timebar from '../Timebar'

const createProps = ({
  time = {},
  timebar = { rows: [] },
  onMove = jest.fn(),
  onEnter = jest.fn(),
  onLeave = jest.fn(),
  setHeight = jest.fn(),
  scrollLeft = 0,
  viewportWidth = 0,
  height = 0,
  isSticky = false,
  enableStickyHeader = false
} = {}) => ({
  time,
  timebar,
  onMove,
  onEnter,
  onLeave,
  setHeight,
  scrollLeft,
  viewportWidth,
  height,
  isSticky,
  enableStickyHeader
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

  it('ensures the scroll left postion gets updated when a new scrollLeft prop is received', () => {
    const props = createProps()
    const wrapper = mount(<Header {...props} />)
    expect(wrapper.find('.timeline__header-scroll').getNode().scrollLeft).toBe(0)

    const nextProps = createProps({ scrollLeft: 100 })
    wrapper.setProps(nextProps)
    expect(wrapper.find('.timeline__header-scroll').getNode().scrollLeft).toBe(100)
  })

  it('ensures the scroll left position is correct when the header becomes sticky', () => {
    const props = createProps({ isSticky: false })
    const wrapper = mount(<Header {...props} />)
    expect(wrapper.find('.timeline__header-scroll').getNode().scrollLeft).toBe(0)

    const nextProps = createProps({ isSticky: true })
    wrapper.setProps(nextProps)
    expect(wrapper.find('.timeline__header-scroll').getNode().scrollLeft).toBe(0)
  })

  it('does not update the scrollLeft position if the component updates and the scrollLeft and isSticky props have not changed', () => {
    const props = createProps()
    const wrapper = mount(<Header {...props} />)
    expect(wrapper.find('.timeline__header-scroll').getNode().scrollLeft).toBe(0)

    const nextProps = createProps({ height: 100 })
    wrapper.setProps(nextProps)
    expect(wrapper.find('.timeline__header-scroll').getNode().scrollLeft).toBe(0)
  })

  it('calls the setHeight() prop when mounted', () => {
    const setHeight = jest.fn()
    const props = createProps({ setHeight, enableStickyHeader: true })
    mount(<Header {...props} />)
    expect(setHeight).toBeCalled()
  })

  it('makes the header sticky if isSticky is true', () => {
    const props = createProps({ isSticky: true })
    const wrapper = mount(<Header {...props} />)
    expect(wrapper.find('.timeline__header').prop('className')).toMatch('is-sticky')
  })

  it('makes the header static if isSticky is false', () => {
    const props = createProps({ isSticky: false })
    const wrapper = mount(<Header {...props} />)
    expect(wrapper.find('.timeline__header').prop('className')).not.toMatch('is-sticky')
  })

  it('sets the viewportWidth and height of the header if sticky', () => {
    const props = createProps({ isSticky: true, viewportWidth: 100, height: 20 })
    const wrapper = mount(<Header {...props} />)
    expect(wrapper.find('.timeline__header').prop('style')).toEqual({
      width: 100,
      height: 20
    })
  })

  it('sets the only height of the header if static', () => {
    const props = createProps({ isSticky: false, viewportWidth: 100, height: 20 })
    const wrapper = mount(<Header {...props} />)
    expect(wrapper.find('.timeline__header').prop('style')).toEqual({ height: 20 })
  })
})
