import getNumericPropertyValue from '../getNumericPropertyValue'

jest.mock('../computedStyle', (node: any) => ({
  getPropertyValue(prop: string) {
    return node.style[prop]
  },
}))

describe('getNumericPropertyValue', () => {
  it('returns the numeric portion within a property value of a DOM node', () => {
    const node = {
      style: {
        height: '100px',
      },
    } as any
    const actual = getNumericPropertyValue(node, 'height')
    expect(actual).toBe(100)
  })
})
