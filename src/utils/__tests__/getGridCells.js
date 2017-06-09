import getGridCells from '../getGridCells'

describe('getGridCells', () => {
  it('returns the cells from the first timebar row that has "useAsGrid" set to true', () => {
    const timebar = [
      {
        cells: [{ id: 'row-1-cell-1' }, { id: 'row-1-cell2' }]
      }, {
        useAsGrid: true,
        cells: [{ id: 'row-2-cell-1' }, { id: 'row-2-cell2' }]
      }, {
        useAsGrid: true,
        cells: [{ id: 'row-3-cell-1' }, { id: 'row-3-cell2' }]
      }
    ]
    const actual = getGridCells(timebar)
    const expected = [{ id: 'row-2-cell-1' }, { id: 'row-2-cell2' }]
    expect(actual).toEqual(expected)
  })

  it('returns "undefined" if none of the rows have "useAsGrid" set to true', () => {
    const timebar = [
      { cells: [{ id: 'row-1-cell-1' }, { id: 'row-1-cell2' }] }
    ]
    const actual = getGridCells(timebar)
    expect(actual).toEqual(undefined)
  })
})
