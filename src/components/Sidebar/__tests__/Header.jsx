import React from 'react'
import { shallow } from 'enzyme'

import Header from '../Header'

const defaultProps = {
  timebar: { rows: [] },
  sticky: {}
}

describe('<Header />', () => {
  it('renders the title for each row', () => {
    const timebar = {
      rows: [
        { id: '1', title: 'row-1' },
        { id: '1', title: 'row-2' }
      ]
    }
    const props = { ...defaultProps, timebar }
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.find('.timebar-key').first().text()).toBe('row-1')
    expect(wrapper.find('.timebar-key').last().text()).toBe('row-2')
  })

  it('reserves the space taken up by the header when it is sticky', () => {
    const sticky = {
      isSticky: true,
      height: 100
    }
    const props = { ...defaultProps, sticky }
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.prop('style')).toEqual({
      paddingTop: 100
    })
  })

  it('does not reserve the space taken up by the header when it is static', () => {
    const sticky = {
      isSticky: false,
      height: 100
    }
    const props = { ...defaultProps, sticky }
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.prop('style')).toEqual({})
  })

  it('becomes sticky when it receives a sticky prop', () => {
    const sticky = {
      isSticky: true,
      width: 200
    }
    const props = { ...defaultProps, sticky }
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.find('.sidebar__header').hasClass('is-sticky')).toBe(true)
    expect(wrapper.find('.sidebar__header').prop('style')).toEqual({ width: 200 })
  })

  it('becomes static when it receives a falsy sticky prop', () => {
    const sticky = {
      isSticky: false,
      width: 200
    }
    const props = { ...defaultProps, sticky }
    const wrapper = shallow(<Header {...props} />)
    expect(wrapper.find('.sidebar__header').hasClass('is-sticky')).toBe(false)
    expect(wrapper.find('.sidebar__header').prop('style')).toEqual({ width: 'auto' })
  })
})
