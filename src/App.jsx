import { useState } from "react"
import "./App.css"
import Grid from "./components/Grid"
import generate from "./sudoku/generator"
import destroy from "./sudoku/destroyer"

const solution = generate()
const initial = destroy(solution)

function App() {
  const [grid, setGrid] = useState(initial)
  function gridChanged(newGrid) {
    setGrid(newGrid)
  }
  return (
    <>
      <div>
        <h1>Play Sudoku</h1>
      </div>
      <div>
        <Grid 
          grid={grid}
          gridChanged={gridChanged} 
          solution={solution}
        />
      </div>
    </>
  )
}

export default App