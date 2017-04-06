import createTime from '../time'

describe('createTime', () => {
  describe('timelineWidth', () => {
    it('calculates timelineWidth from start, end and scale', () => {
      const { timelineWidth } = createTime({
        start: new Date('2017-01-01T00:00:00.000Z'),
        end: new Date('2018-01-01T00:00:00.000Z'),
        scale: 10 // 10px === 1 day
      })
      expect(timelineWidth).toBe(3650)
    })

    it('scale relates to pixel width of one day', () => {
      const newYear = new Date('2017-01-01T00:00:00.000Z')
      const newYearMidday = new Date('2017-01-01T12:00:00.000Z')
      const { timelineWidth } = createTime({
        start: newYear,
        end: newYearMidday,
        scale: 100
      })
      expect(timelineWidth).toBe(50)
    })
  })

  describe('toX()', () => {
    it('calculates correct value for x', () => {
      const start = new Date('2017-01-01T00:00:00.000Z')
      const end = new Date('2018-01-01T00:00:00.000Z')
      const { toX } = createTime({ start, end, scale: 2 })
      const nearMiddle = new Date('2017-07-01')
      const notClamped = new Date('2020-01-01')
      expect(toX(end)).toBe(730)
      expect(toX(start)).toBe(0)
      expect(toX(nearMiddle)).toBe(362)
      expect(toX(notClamped)).toBe(2190)
    })
  })
})
