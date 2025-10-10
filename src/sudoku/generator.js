function getBlock(grid, row, col) {
  const block = []
  const yStart = Math.floor(row/3)*3
  const yEnd = yStart+3
  const xStart = Math.floor(col/3)*3
  const xEnd = xStart+3
  for (let y = yStart; y < yEnd; y++) {
    for (let x = xStart; x < xEnd; x++) {
      if (grid[y][x]) {
        block.push(grid[y][x])
      }
    }
  }
  return block
}

function getRandomCandidates() {
  const remainingCandidates = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const randomCandidates = Array(9)
  for (let i = 0; i < 9; i++) {
    const randomIndex = Math.floor(Math.random() * remainingCandidates.length)
    randomCandidates[i] = remainingCandidates.splice(randomIndex, 1)[0]
  }
  return randomCandidates
}

function getCandidates(grid, row, col) {
  const candidates = []
  const block = getBlock(grid, row, col)
  const randomCandidates = getRandomCandidates()
  for (let i of randomCandidates) {
    let isAllowed = block.indexOf(i) == -1
    if (isAllowed) {
      for (let y = 0; y < 9; y++) {
        if (grid[y][col] == i) {
          isAllowed = false
          break
        }
      }
    }
    if (isAllowed) {
      for (let x = 0; x < 9; x++) {
        if (grid[row][x] == i) {
          isAllowed = false
          break
        }
      }
    }
    if (!isAllowed) {
      continue
    }
    candidates.push(i)
  }
  return candidates
}

function copyGrid(grid) {
  const newGrid = Array(grid.length)
  for (let i = 0; i < 9; i++) {
    newGrid[i] = grid[i].slice()
  }
  return newGrid
}

function fillGrid(grid, numFilled) {
  numFilled = numFilled || 0
  if (numFilled == 9**2) {
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
    const filledGrid = fillGrid(newGrid, numFilled+1)
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