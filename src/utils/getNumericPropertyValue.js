import getComputedStyle from './getComputedStyle'

export default (node, prop) =>
  parseInt(getComputedStyle(node).getPropertyValue(prop), 10)
