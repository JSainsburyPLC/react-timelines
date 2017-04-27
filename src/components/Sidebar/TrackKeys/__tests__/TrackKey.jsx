import React from 'react'
import { shallow } from 'enzyme'

import TrackKey from '../TrackKey'
import TrackKeys from '../'

const createProps = ({
  track = {
    title: 'TEST'
  },
  toggleOpen = jest.fn()
}) => ({ track, toggleOpen })

describe('<TrackKey />', () => {
  describe('toggle button', () => {
    const getToggleButton = node => node.find('.track-key__toggle')

    it('renders when "track.isOpen" is defined', () => {
      const track = {
        title: 'TEST',
        isOpen: false
      }
      const props = createProps({ track })
      const wrapper = shallow(<TrackKey {...props} />)
      expect(getToggleButton(wrapper).exists()).toBe(true)
    })

    it('does not render when "track.isOpen" is undefined', () => {
      const track = {
        title: 'TEST'
      }
      const props = createProps({ track })
      const wrapper = shallow(<TrackKey {...props} />)
      expect(getToggleButton(wrapper).exists()).toBe(false)
    })

    it('renders with the text "Close" when "track.isOpen" is "true"', () => {
      const track = {
        title: 'TEST',
        isOpen: true
      }
      const props = createProps({ track })
      const wrapper = shallow(<TrackKey {...props} />)
      expect(getToggleButton(wrapper).text()).toBe('Close')
    })

    it('renders with the text "Open" when "track.isOpen" is "false"', () => {
      const track = {
        title: 'TEST',
        isOpen: false
      }
      const props = createProps({ track })
      const wrapper = shallow(<TrackKey {...props} />)
      expect(getToggleButton(wrapper).text()).toBe('Open')
    })

    it('calls "toggleOpen()" when clicked passing "track" as a single argument', () => {
      const track = {
        title: 'TEST',
        isOpen: false
      }
      const toggleOpen = jest.fn()
      const props = createProps({ track, toggleOpen })
      const wrapper = shallow(<TrackKey {...props} />)
      getToggleButton(wrapper).simulate('click')
      expect(toggleOpen).toBeCalledWith(track)
    })
  })

  describe('<TrackKeys />', () => {
    it('renders when "isOpen" is truthy and "tracks" is not empty', () => {
      const track = {
        title: 'TEST',
        tracks: [{}],
        isOpen: true
      }
      const props = createProps({ track })
      const wrapper = shallow(<TrackKey {...props} />)
      expect(wrapper.find(TrackKeys).exists()).toBe(true)
    })

    it('does not render when "isOpen" is falsy', () => {
      const track = {
        title: 'TEST',
        tracks: [{}],
        isOpen: false
      }
      const props = createProps({ track })
      const wrapper = shallow(<TrackKey {...props} />)
      expect(wrapper.find(TrackKeys).exists()).toBe(false)
    })

    it('does not render when "tracks" is falsy', () => {
      const track = {
        title: 'TEST',
        isOpen: true
      }
      const props = createProps({ track })
      const wrapper = shallow(<TrackKey {...props} />)
      expect(wrapper.find(TrackKeys).exists()).toBe(false)
    })

    it('does not render when "tracks" is an empty array', () => {
      const track = {
        title: 'TEST',
        tracks: [],
        isOpen: true
      }
      const props = createProps({ track })
      const wrapper = shallow(<TrackKey {...props} />)
      expect(wrapper.find(TrackKeys).exists()).toBe(false)
    })
  })
})
