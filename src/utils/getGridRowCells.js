const getGridCells = timebar =>
  (timebar.find(row => row.useAsGrid) || {}).cells

export default getGridCells
