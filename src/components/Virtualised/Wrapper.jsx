import React, { Component } from 'react'
import PropTypes from 'prop-types'

import VirtualisedContext from './context'

class VirtualisedWrapper extends Component {
  static propTypes = {
    height: PropTypes.number.isRequired,
    itemCount: PropTypes.number.isRequired,
    itemSize: PropTypes.number.isRequired,
    children: PropTypes.node.isRequired,
  }

  constructor(props) {
    super(props)

    this.elements = {}
  }

  handleScroll = scrollOffset => {
    const elements = Object.values(this.elements)

    for (let index = 0; index < elements.length; index += 1) {
      const { current } = elements[index]

      current.scrollTo(scrollOffset)
    }
  }

  addElement = (id, ref) => {
    this.elements[id] = ref
  }

  render() {
    const { height, itemCount, itemSize, children } = this.props
    const value = {
      addElement: this.addElement,
      height,
      itemCount,
      itemSize,
      handleScroll: this.handleScroll,
    }

    return <VirtualisedContext.Provider value={value}>{children}</VirtualisedContext.Provider>
  }
}

export default VirtualisedWrapper
