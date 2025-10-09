import { useState } from "react"
import "./App.css"
import Grid from "./components/Grid"

function App() {


  return (
    <>
      <div>
        <h1>Play Sudoku</h1>
      </div>
      <div>
        <Grid/>
      </div>
    </>
  )
}

export default App