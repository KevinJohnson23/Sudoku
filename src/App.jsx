import { useState, useEffect } from "react"
import "./App.scss"
import Grid from "./components/Grid"
import CompletionScreen from "./components/CompletionScreen"
import SelectionScreen from "./components/SelectionScreen"
import Timer from "./components/Timer"
import getDailySudoku from "./sudoku/dailySudoku"

const date = new Date()
const [solution, initial] = getDailySudoku(date.getFullYear(), date.getMonth(), date.getDate())

function App() {
  const [puzzle, setPuzzle] = useState({
    solution: solution,
    grid: initial
  })
  const [paused, setPaused] = useState(false)
  const [selectedDate, setSelectedDate] = useState({
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate()
  })
  const [selectingPuzzle, setSelectingPuzzle] = useState(false)
  const [time, setTime] = useState(0)

  function gridChanged(newGrid) {
    setPuzzle({
      solution: puzzle.solution,
      grid: newGrid
    })
  }

  function newPuzzle() {
    const [newSolution, newInitial] = getDailySudoku(
      selectedDate.year,
      selectedDate.month,
      selectedDate.day
    )
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

  useEffect(() => {
    if (completed || paused || selectingPuzzle) {
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
      <SelectionScreen
        selectingPuzzle={selectingPuzzle}
        setSelectingPuzzle={setSelectingPuzzle}
        selectedDate={selectedDate}
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
        <button onClick={() => { setSelectingPuzzle(!selectingPuzzle) }}>
          Select Puzzle
        </button>
      </div>
    </>
  )
}

export default App