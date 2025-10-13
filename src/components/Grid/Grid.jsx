import Row from "./Row"
import PauseScreen from "./PauseScreen"

export default function Grid({ grid, gridChanged, initial, solution, paused, setPaused, autoCheck }) {
  function rowChanged(rowIndex, newRow) {
    const newGrid = grid.slice()
    newGrid[rowIndex] = newRow
    gridChanged(newGrid)
  }

  function newRow(rowIndex) {
    return (
      <Row
        rowIndex={rowIndex}
        row={grid[rowIndex]}
        rowChanged={rowChanged}
        initial={initial[rowIndex]}
        solution={solution[rowIndex]}
        autoCheck={autoCheck}
      />
    )
  }

  return (
    <div className="grid-container">
      <div className="grid">
        {newRow(0)}
        {newRow(1)}
        {newRow(2)}
        {newRow(3)}
        {newRow(4)}
        {newRow(5)}
        {newRow(6)}
        {newRow(7)}
        {newRow(8)}
      </div>
      <PauseScreen
        paused={paused}
        setPaused={setPaused}
      />
    </div>
  )
}