const getGridRowCells = timebar =>
  timebar.find(row => (
    row.useAsGrid) ||
    timebar[timebar.length - 1]
  ).cells

export default getGridRowCells
