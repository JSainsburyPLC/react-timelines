import getRelativeMouseX from '../getRelativeMouseX'

describe('getRelativeMouseX', () => {
  it('gets mouse x position for a given event', () => {
    const event = {
      clientX: 200,
      currentTarget: {
        getBoundingClientRect: () => ({ left: 10 })
      }
    }
    expect(getRelativeMouseX(event)).toBe(190)
  })
})
