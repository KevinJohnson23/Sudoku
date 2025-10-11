import { useState, useEffect } from "react"
import "./App.scss"
import Grid from "./components/Grid"
import CompletionScreen from "./components/CompletionScreen"
import Timer from "./components/Timer"
import getDailySudoku from "./sudoku/dailySudoku"

const [solution, initial] = getDailySudoku(2025, 10, 11)

function App() {
  const [puzzle, setPuzzle] = useState({
    solution: solution,
    grid: initial
  })

  const [paused, setPaused] = useState(false)

  function gridChanged(newGrid) {
    setPuzzle({
      solution: puzzle.solution,
      grid: newGrid
    })
  }

  function newPuzzle() {
    const [newSolution, newInitial] = getDailySudoku(2025, 10, 11)
    setPuzzle({
      solution: newSolution,
      grid: newInitial
    })
    setTime(0)
    setPaused(false)
  }

  let completed = true
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (puzzle.grid[row][col] != puzzle.solution[row][col]) {
        completed = false
        break
      }
    }
  }

  const [time, setTime] = useState(0)
  useEffect(() => {
    if (completed || paused) {
      return
    }
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
    return () => clearInterval(interval)
  })

  return (
    <>
      <CompletionScreen
        newPuzzle={newPuzzle}
        completed={completed}
        time={time}
      />
      <div>
        <h1>Play Sudoku</h1>
      </div>
      <Grid
        grid={puzzle.grid}
        gridChanged={gridChanged}
        solution={puzzle.solution}
        paused={paused}
        setPaused={setPaused}
      />
      <div>
        <Timer
          timeSeconds={time}
          paused={paused}
          setPaused={() => { setPaused(!paused) }}
        />
        <button onClick={newPuzzle}>
          Generate Puzzle
        </button>
      </div>
    </>
  )
}

export default App