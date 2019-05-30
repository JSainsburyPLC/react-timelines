type Timebar = Array<{
  useAsGrid: boolean
  cells: any
}>

const getGrid = (timebar: Timebar) => (timebar.find(row => row.useAsGrid) || { cells: undefined }).cells

export default getGrid
