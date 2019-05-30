import getMouseX from '../getMouseX'

describe('getMouseX', () => {
  it('gets mouse x position for a given event', () => {
    const event = {
      clientX: 200,
      currentTarget: {
        getBoundingClientRect: () => ({ left: 10 }),
      },
    } as any
    expect(getMouseX(event)).toBe(190)
  })
})
