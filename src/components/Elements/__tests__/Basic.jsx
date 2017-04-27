import React from 'react'
import { shallow } from 'enzyme'

import Basic from '../Basic'

const createProps = ({
  title = '',
  start = new Date('2017-01-01'),
  end = new Date('2017-02-01'),
  style = {},
  tooltip = ''
}) => ({
  title, start, end, style, tooltip
})

describe('<Basic />', () => {
  describe('Tooltip', () => {
    const getTooltip = node => node.find('.element__tooltip')

    it('renders the tooltip value if it exists', () => {
      const tooltip = 'Test tooltip'
      const props = createProps({ tooltip })
      const wrapper = shallow(<Basic {...props} />)
      expect(getTooltip(wrapper).text()).toBe(tooltip)
    })

    it('renders the title, formatted start and end date if the tooltip prop does not exist', () => {
      const tooltip = ''
      const title = 'TEST'
      const start = new Date('2017-03-20')
      const end = new Date('2017-04-15')
      const props = createProps({ tooltip, title, start, end })
      const wrapper = shallow(<Basic {...props} />)
      expect(getTooltip(wrapper).text()).toMatch('TEST')
      expect(getTooltip(wrapper).text()).toMatch('Start 20 Mar')
      expect(getTooltip(wrapper).text()).toMatch('End 15 Apr')
    })
  })
})
