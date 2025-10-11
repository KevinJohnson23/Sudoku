import { useState } from "react"

export default function Week({ year, month, row, setDate }) {

  const firstDay = new Date(year, month, 1).getDay()
  const lastDay = new Date(year, month + 1, 0).getDate()
  const prevLastDay = new Date(year, month, 0).getDate()

  const dayNum = row * 7 - firstDay + 1

  return <>
    {
      Array(7).fill(0).map((_, i) => (
        <td key={i}><button>{
          dayNum + i < 0 ?
            prevLastDay + i - firstDay + 2
            : dayNum + i >= lastDay ?
              dayNum + i - lastDay + 1
              : dayNum + i + 1
        }</button></td>
      ))
    }
  </>
}