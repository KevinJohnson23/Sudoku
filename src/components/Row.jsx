import { useState } from "react"
import Cell from "./Cell"

export default function Row({ rowIndex, row, rowChanged, solution }) {

  function cellChanged(columnIndex, value) {
    const newRow = row.slice()
    newRow[columnIndex] = value
    rowChanged(rowIndex, newRow)
  }

  function newCell(columnIndex) {
    return (
      <Cell
        columnIndex={columnIndex}
        value={row[columnIndex]}
        cellChanged={cellChanged}
        solution={solution[columnIndex]}
      />
    )
  }

  return (
    <div className="row">
      {newCell(0)}
      {newCell(1)}
      {newCell(2)}
      {newCell(3)}
      {newCell(4)}
      {newCell(5)}
      {newCell(6)}
      {newCell(7)}
      {newCell(8)}
    </div>
  )
}