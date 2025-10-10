import copyGrid from "./util/copyGrid"
import getCandidates from "./util/getCandidates"

function fillGrid(grid, numFilled) {
  numFilled = numFilled || 0
  if (numFilled == 9 ** 2) {
    return grid
  }
  const row = Math.floor(numFilled / 9)
  const col = numFilled % 9
  const candidates = getCandidates(grid, row, col)
  if (candidates.length == 0) {
    return null
  }
  for (let candidate of candidates) {
    const newGrid = copyGrid(grid)
    newGrid[row][col] = candidate
    const filledGrid = fillGrid(newGrid, numFilled + 1)
    if (filledGrid) {
      return filledGrid
    }
  }
}

function generate() {
  const grid = Array(9).fill(Array(9))
  return fillGrid(grid)
}

export default generate