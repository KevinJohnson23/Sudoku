import { useState } from "react"
import "./App.css"
import Grid from "./components/Grid"

function App() {
  const [grid, setGrid] = useState(Array(9).fill(Array(9).fill(1)))

  function gridChanged(newGrid) {
    setGrid(newGrid)
  }

  return (
    <>
      <div>
        <h1>Play Sudoku</h1>
      </div>
      <div>
        <Grid grid={grid} gridChanged={gridChanged}/>
      </div>
    </>
  )
}

export default App