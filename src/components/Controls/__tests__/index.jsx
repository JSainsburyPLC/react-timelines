import React from 'react'
import { shallow } from 'enzyme'

import Controls from '../'

const createProps = ({
  isOpen = true,
  toggleOpen = jest.fn(),
  zoomIn = jest.fn(),
  zoomOut = jest.fn(),
  zoom = 2,
  zoomMin = 1,
  zoomMax = 10
}) => ({
  isOpen,
  toggleOpen,
  zoomIn,
  zoomOut,
  zoom,
  zoomMin,
  zoomMax
})

describe('<Controls />', () => {
  describe('Zoom in button', () => {
    const buttonElement = 'button.controls__button--zoom-in'

    it('is disabled when "zoom" is equal to "zoomMax"', () => {
      const props = createProps({ zoom: 5, zoomMax: 5 })
      const wrapper = shallow(<Controls {...props} />)
      expect(wrapper.find(buttonElement).prop('disabled')).toBe(true)
    })

    it('is disabled when "zoom" is greater than "zoomMax"', () => {
      const props = createProps({ zoom: 6, zoomMax: 5 })
      const wrapper = shallow(<Controls {...props} />)
      expect(wrapper.find(buttonElement).prop('disabled')).toBe(true)
    })

    it('is not disabled when "zoom" is less than "zoomMax"', () => {
      const props = createProps({ zoom: 2, zoomMax: 5 })
      const wrapper = shallow(<Controls {...props} />)
      expect(wrapper.find(buttonElement).prop('disabled')).toBe(false)
    })

    it('calls "zoomIn() when clicked"', () => {
      const zoomIn = jest.fn()
      const props = createProps({ zoom: 2, zoomMax: 5, zoomIn })
      const wrapper = shallow(<Controls {...props} />)
      wrapper.find(buttonElement).simulate('click')
      expect(zoomIn).toBeCalled()
    })
  })

  describe('Zoom out button', () => {
    const buttonElement = 'button.controls__button--zoom-out'

    it('is disabled when "zoom" is equal to "zoomMin"', () => {
      const props = createProps({ zoom: 2, zoomMin: 2 })
      const wrapper = shallow(<Controls {...props} />)
      expect(wrapper.find(buttonElement).prop('disabled')).toBe(true)
    })

    it('is disabled when "zoom" is less than "zoomMin"', () => {
      const props = createProps({ zoom: 1, zoomMin: 2 })
      const wrapper = shallow(<Controls {...props} />)
      expect(wrapper.find(buttonElement).prop('disabled')).toBe(true)
    })

    it('is not disabled when "zoom" is greater than "zoomMin"', () => {
      const props = createProps({ zoom: 5, zoomMin: 2 })
      const wrapper = shallow(<Controls {...props} />)
      expect(wrapper.find(buttonElement).prop('disabled')).toBe(false)
    })

    it('calls "zoomOut() when clicked"', () => {
      const zoomOut = jest.fn()
      const props = createProps({ zoom: 5, zoomMin: 2, zoomOut })
      const wrapper = shallow(<Controls {...props} />)
      wrapper.find(buttonElement).simulate('click')
      expect(zoomOut).toBeCalled()
    })
  })
})
