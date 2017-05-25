import classes from '../classes'

describe('classes', () => {
  it('returns the base class', () => {
    expect(classes('foo')).toBe('foo')
  })

  it('returns the base class plus additional class passed as string', () => {
    expect(classes('bar', 'hello')).toBe('bar hello')
  })

  it('returns the base class plus additional class passed as array', () => {
    expect(classes('bar', ['hello'])).toBe('bar hello')
    expect(classes('foo', ['hello', 'world'])).toBe('foo hello world')
  })
})
