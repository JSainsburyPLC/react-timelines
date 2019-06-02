import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FixedSizeList as List } from 'react-window'

import VirtualisedContext from './context'

class VirtualisedElement extends Component {
  static contextType = VirtualisedContext

  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
  }

  constructor(props) {
    super(props)

    this.ref = React.createRef()
  }

  componentDidMount() {
    const { id } = this.props
    const { addElement } = this.context

    addElement(id, this.ref)
  }

  onScroll = ({ scrollOffset, scrollUpdateWasRequested }) => {
    if (scrollUpdateWasRequested) return

    const { handleScroll } = this.context
    handleScroll(scrollOffset)
  }

  render() {
    const { children } = this.props
    const { height, itemCount, itemSize } = this.context

    return (
      <List height={height} itemCount={itemCount} itemSize={itemSize} ref={this.ref} onScroll={this.onScroll}>
        {children}
      </List>
    )
  }
}

export default VirtualisedElement
