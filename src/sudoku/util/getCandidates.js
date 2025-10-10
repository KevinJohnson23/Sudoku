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

export default getCandidates