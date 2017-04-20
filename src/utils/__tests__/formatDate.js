import { getMonth, getDayMonth } from '../formatDate'

describe('formatDate', () => {
  describe('getMonth', () => {
    it('returns the current month name for a given date', () => {
      expect(getMonth(new Date('2017-01-01'))).toEqual('Jan')
      expect(getMonth(new Date('2017-02-01'))).toEqual('Feb')
      expect(getMonth(new Date('2017-11-01'))).toEqual('Nov')
    })
  })

  describe('getDayMonth', () => {
    it('returns the current day and month', () => {
      expect(getDayMonth(new Date('2017-02-01'))).toEqual('1 Feb')
      expect(getDayMonth(new Date('2017-05-20'))).toEqual('20 May')
      expect(getDayMonth(new Date('2017-12-20'))).toEqual('20 Dec')
    })
  })
})
