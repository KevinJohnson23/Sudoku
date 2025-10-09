import { useState } from "react"
import Row from "./Row"

export default function Grid({grid, gridChanged}) {
  function rowChanged(rowIndex, newRow) {
    const newGrid = grid.slice()
    newGrid[rowIndex] = newRow
    gridChanged(newGrid)
  }

  function newRow(rowIndex) {
    return (
      <Row rowIndex={rowIndex} row={grid[rowIndex]} rowChanged={rowChanged}/>
    )
  }

  return (
    <>
      {newRow(0)}
      {newRow(1)}
      {newRow(2)}
      {newRow(3)}
      {newRow(4)}
      {newRow(5)}
      {newRow(6)}
      {newRow(7)}
      {newRow(8)}
    </>
  )
}