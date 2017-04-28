import React from 'react'
import { shallow } from 'enzyme'

import Element from '../Element'
import BasicElement from '../../../Elements/Basic'
import createTime from '../../../../utils/time'


describe('<Element />', () => {
  const props = {
    id: '1',
    time: createTime({
      start: new Date('2016-01-01'),
      end: new Date('2019-01-01'),
      zoom: 1
    }),
    title: 'test',
    start: new Date('2017-01-01'),
    end: new Date('2018-01-01')
  }

  it('renders with a calculated width and left position based on "start" and "end"', () => {
    const wrapper = shallow(<Element {...props} />)
    expect(wrapper.prop('style')).toEqual({
      left: '366px',
      width: '365px'
    })
  })

  it('renders <BasicElement />', () => {
    const wrapper = shallow(<Element {...props} />)
    expect(wrapper.find(BasicElement).exists()).toBe(true)
  })
})
