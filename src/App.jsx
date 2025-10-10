import { useState } from "react"
import "./App.css"
import Grid from "./components/Grid"
import generate from "./sudoku/generator"
import destroy from "./sudoku/destroyer"

const solution = generate()
const initial = destroy(solution)

function App() {
  const [puzzle, setPuzzle] = useState({
    solution: solution,
    grid: initial
  })

  function gridChanged(newGrid) {
    setPuzzle({
      solution: puzzle.solution,
      grid: newGrid
    })
  }

  function newPuzzle() {
    const newSolution = generate()
    const newInitial = destroy(newSolution)
    setPuzzle({
      solution: newSolution,
      grid: newInitial
    })
  }

  return (
    <>
      <div>
        <h1>Play Sudoku</h1>
      </div>
      <div>
        <Grid 
          grid={puzzle.grid}
          gridChanged={gridChanged} 
          solution={puzzle.solution}
        />
      </div>
      <div>
        <button onClick={newPuzzle}>
          Generate Puzzle
        </button>
      </div>
    </>
  )
}

export default App