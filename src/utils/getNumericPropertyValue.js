export default (node, prop) =>
  parseInt(getComputedStyle(node, null).getPropertyValue(prop), 10)
