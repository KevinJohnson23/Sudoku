import copyGrid from "./util/copyGrid"
import getCandidates from "./util/getCandidates"

const ATTEMPTS = 1//9**2

function getSolutions(grid) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (grid[row][col]) {
        continue
      }
      let solutions = []
      for (let candidate of getCandidates(grid, row, col)) {
        const newGrid = copyGrid(grid)
        newGrid[row][col] = candidate
        const newSolutions = getSolutions(newGrid)
        solutions = solutions.concat(newSolutions)
      }
      return solutions
    }
  }
  return [grid]
}

function destroyGrid(grid, attempts) {
  const tried = new Set()
  while (attempts > 0) {
    let randomRow = null
    let randomCol = null
    do {
      randomRow = Math.floor(Math.random() * 9)
      randomCol = Math.floor(Math.random() * 9)
    } while (!grid[randomRow][randomCol] && !tried.has(`${randomRow},${randomCol}`))
    tried.add(`${randomRow},${randomCol}`)
    const newGrid = copyGrid(grid)
    newGrid[randomRow][randomCol] = null
    if (getSolutions(newGrid).length == 1) {
      grid = newGrid
    }
    attempts -= 1
  }
  return grid
}

function destroy(grid) {
  return destroyGrid(grid, ATTEMPTS)
}

export default destroy