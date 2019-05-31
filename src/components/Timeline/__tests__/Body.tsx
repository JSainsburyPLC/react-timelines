import { shallow } from 'enzyme'
import React from 'react'

import Body from '../Body'
import Grid from '../Grid'
import Tracks from '../Tracks'

const defaultProps = {
  time: {},
  grid: [],
  tracks: [],
}

describe('<Body />', () => {
  it('renders <Tracks />', () => {
    const wrapper = shallow(<Body {...defaultProps} />)
    expect(wrapper.find(Tracks).exists()).toBe(true)
  })

  it('renders <Grid /> if grid prop exists', () => {
    const wrapper = shallow(<Body {...defaultProps} />)
    expect(wrapper.find(Grid).exists()).toBe(true)
  })

  it('does not render <Grid /> if grid prop does not exist', () => {
    const props = {
      ...defaultProps,
      grid: undefined,
    }
    const wrapper = shallow(<Body {...props} />)
    expect(wrapper.find(Grid).exists()).toBe(false)
  })
})
