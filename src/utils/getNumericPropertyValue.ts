import computedStyle from './computedStyle'

export default (node: Element, propName: string) => parseInt(computedStyle(node).getPropertyValue(propName), 10)
