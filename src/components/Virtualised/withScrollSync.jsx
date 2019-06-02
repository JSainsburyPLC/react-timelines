import React from 'react'
import PropTypes from 'prop-types'

const withScrollSync = Component =>
  class VirtualisedWrapper extends React.Component {
    static propTypes = {
      scrollSyncOptions: PropTypes.shape({
        height: PropTypes.number.isRequired,
        itemCount: PropTypes.number.isRequired,
        itemSize: PropTypes.number.isRequired,
      }).isRequired,
    }

    constructor(props) {
      super(props)

      this.elements = {}
    }

    handleScroll = (originId, { scrollOffset, scrollUpdateWasRequested }) => {
      if (scrollUpdateWasRequested) return

      const elements = Object.entries(this.elements)

      for (let index = 0; index < elements.length; index += 1) {
        const [id, { current }] = elements[index]

        if (id !== originId) {
          current.scrollTo(scrollOffset)
        }
      }
    }

    addElement = (id, ref) => {
      this.elements[id] = ref
    }

    render() {
      const { scrollSyncOptions, ...otherProps } = this.props
      const { height, itemCount, itemSize } = scrollSyncOptions
      const scrollSync = {
        addElement: this.addElement,
        height,
        itemCount,
        itemSize,
        handleScroll: this.handleScroll,
      }

      return <Component {...otherProps} scrollSync={scrollSync} />
    }
  }

export default withScrollSync
