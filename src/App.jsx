import { useState, useEffect } from "react"
import "./App.scss"
import Grid from "./components/Grid/Grid"
import CompletionScreen from "./components/CompletionScreen"
import SelectionScreen from "./components/PuzzleSelection/SelectionScreen"
import SettingsScreen from "./components/Settings/SettingsScreen"
import Timer from "./components/Timer"
import getDailySudoku from "./sudoku/dailySudoku"

const date = new Date()
const [solution, initial] = getDailySudoku(date.getFullYear(), date.getMonth(), date.getDate())

const SETTINGS_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Settings-icon-symbol-vector.png/600px-Settings-icon-symbol-vector.png?20181023000603"

function App() {
  const [puzzle, setPuzzle] = useState({
    solution: solution,
    initial: initial,
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
  const [changingSettings, setChangingSettings] = useState(false)
  const [time, setTime] = useState(0)
  const [settings, setSettings] = useState({
    showTimer: true,
    autoCheck: false,
  })

  function gridChanged(newGrid) {
    setPuzzle({
      solution: puzzle.solution,
      initial: puzzle.initial,
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
      initial: newInitial,
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

  useEffect(() => {
    if (isPausedEffective) {
      return
    }
    const interval = setInterval(() => {
      setTime(prevTime => prevTime + 1)
    }, 1000)
    return () => clearInterval(interval)
  })

  function startSelectingPuzzle() {
    setAdmiringPuzzle(true)
    setSelectingPuzzle(true)
  }

  function setNewSettings(newSettings) {
    setSettings(newSettings)
    setChangingSettings(false)
  }

  let completed = true
  let filled = true
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (!puzzle.grid[row][col]) {
        filled = false
        completed = false
      }
      if (!completed && !filled) {
        break
      }
      if (puzzle.grid[row][col] != puzzle.solution[row][col]) {
        completed = false
      }
    }
    if (!completed && !filled) {
      break
    }
  }
  const isPausedEffective = completed || admiringPuzzle || paused || selectingPuzzle || changingSettings;

  const monthShorthand = new Date(selectedDate.year, selectedDate.month).toLocaleString("default", { month: "short" })

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
      {changingSettings ?
        <SettingsScreen
          setChangingSettings={setChangingSettings}
          settings={settings}
          setSettings={setNewSettings}
        />
        : null
      }
      <div className="header">
        <div>
          <h2>Sudoku</h2>
          <h1>{`${monthShorthand} ${selectedDate.day}, ${selectedDate.year}`}</h1>
        </div>
        {
          settings.showTimer ? <Timer
            timeSeconds={time}
            paused={isPausedEffective}
            setPaused={() => { setPaused(!paused) }}
            hidePause={admiringPuzzle || completed}
          /> : null
        }
      </div>
      <Grid
        grid={puzzle.grid}
        gridChanged={gridChanged}
        initial={puzzle.initial}
        solution={puzzle.solution}
        paused={paused}
        setPaused={setPaused}
        autoCheck={settings.autoCheck}
      />
      <div className="footer">
        <button
          className="settings-button"
          onClick={() => { setChangingSettings(true) }}
        >
          <img src={SETTINGS_IMAGE} />
        </button>
        <button
          className="footer-button"
          onClick={() => { setSelectingPuzzle(!selectingPuzzle) }}
        >
          Select Puzzle
        </button>
      </div>
    </>
  )
}

export default App