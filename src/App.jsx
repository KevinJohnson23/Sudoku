import { useState, useEffect } from "react"
import "./App.scss"
import Grid from "./components/Grid"
import CompletionScreen from "./components/CompletionScreen"
import Timer from "./components/Timer"
import generate from "./sudoku/generator"
import destroy from "./sudoku/destroyer"

const solution = generate()
const initial = destroy(solution)

function App() {
  const [puzzle, setPuzzle] = useState({
    solution: solution,
    grid: initial
  })

  const [time, setTime] = useState(0)
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time + 1)
    }, 1000)
    return () => clearInterval(interval)
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
    setTime(0)
  }

  let isComplete = true
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle.grid[row][col] != puzzle.solution[row][col]) {
        isComplete = false
        break
      }
    }
  }

  return (
    <>
      <CompletionScreen
        newPuzzle={newPuzzle}
        isComplete={isComplete}
      />
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
        <Timer
          timeSeconds={time}
        />
        <button onClick={newPuzzle}>
          Generate Puzzle
        </button>
      </div>
    </>
  )
}

export default App