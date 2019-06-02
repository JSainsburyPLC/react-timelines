import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { FixedSizeList as List } from 'react-window'

class VirtualisedElement extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    children: PropTypes.func.isRequired,
    scrollSync: PropTypes.shape({}).isRequired,
  }

  constructor(props) {
    super(props)

    this.ref = React.createRef()
  }

  componentDidMount() {
    const { id, scrollSync } = this.props
    const { addElement } = scrollSync

    addElement(id, this.ref)
  }

  render() {
    const { children, scrollSync, id } = this.props
    const { height, itemCount, itemSize, handleScroll } = scrollSync
    const onScroll = scrollArgs => handleScroll(id, scrollArgs)

    return (
      <List height={height} itemCount={itemCount} itemSize={itemSize} ref={this.ref} onScroll={onScroll}>
        {children}
      </List>
    )
  }
}

export default VirtualisedElement
