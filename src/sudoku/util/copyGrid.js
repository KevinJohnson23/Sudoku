function copyGrid(grid) {
  const newGrid = Array(grid.length)
  for (let i = 0; i < 9; i++) {
    newGrid[i] = grid[i].slice()
  }
  return newGrid
}

export default copyGrid