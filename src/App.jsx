import { useState, useEffect } from "react"
import "./App.scss"
import Grid from "./components/Grid/Grid"
import CompletionScreen from "./components/CompletionScreen"
import SelectionScreen from "./components/PuzzleSelection/SelectionScreen"
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
  const [admiringPuzzle, setAdmiringPuzzle] = useState(false)
  const [time, setTime] = useState(0)

  function gridChanged(newGrid) {
    setPuzzle({
      solution: puzzle.solution,
      grid: newGrid
    })
  }

  function newPuzzle(date) {
    date = date || selectedDate
    const [newSolution, newInitial] = getDailySudoku(
      date.year,
      date.month,
      date.day
    )
    setTime(0)
    setPaused(false)
    setSelectingPuzzle(false)
    setAdmiringPuzzle(false)
    setPuzzle({
      solution: newSolution,
      grid: newInitial
    })
  }

  function newPuzzleFromDate(date) {
    setSelectedDate({
      year: date.year,
      month: date.month,
      day: date.day
    })
    newPuzzle(date)
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
    if (completed || admiringPuzzle || paused || selectingPuzzle) {
      return
    }
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
    return () => clearInterval(interval)
  })

  const monthShorthand = new Date(selectedDate.year, selectedDate.month).toLocaleString("default", { month: "short" })

  function startSelectingPuzzle() {
    setAdmiringPuzzle(true)
    setSelectingPuzzle(true)
  }

  return (
    <>
      {completed && !admiringPuzzle ?
        <CompletionScreen
          showScreen={completed && !admiringPuzzle}
          setAdmiringPuzzle={setAdmiringPuzzle}
          startSelectingPuzzle={startSelectingPuzzle}
          time={time}
        />
        : null
      }
      {selectingPuzzle ?
        <SelectionScreen
          setSelectingPuzzle={setSelectingPuzzle}
          selectedDate={selectedDate}
          newPuzzleFromDate={newPuzzleFromDate}
        /> : null
      }
      <div className="header">
        <div>
          <h2>Sudoku</h2>
          <h1>{`${monthShorthand} ${selectedDate.day}, ${selectedDate.year}`}</h1>
        </div>
        <Timer
          timeSeconds={time}
          paused={paused}
          setPaused={() => { setPaused(!paused) }}
          hidePause={admiringPuzzle || completed}
        />
      </div>
      <Grid
        grid={puzzle.grid}
        gridChanged={gridChanged}
        solution={puzzle.solution}
        paused={paused}
        setPaused={setPaused}
      />
      <div className="footer">
        <button
          className="select-puzzle-button"
          onClick={() => { setSelectingPuzzle(!selectingPuzzle) }}
        >
          Select Puzzle
        </button>
      </div>
    </>
  )
}

export default App