import { useState } from "react"
import "./App.css"
import Grid from "./components/Grid"
import generate from "./sudoku/generator"

const generatedGrid = generate()

function App() {
  const [grid, setGrid] = useState(generatedGrid)
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