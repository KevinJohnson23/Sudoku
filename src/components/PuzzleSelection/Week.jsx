import { useState } from "react"

export default function Week({ year, month, row }) {
  const dayNum = row * 7
  if (row < 4) {
    return (
      <>
        <td><button>{dayNum + 1}</button></td>
        <td><button>{dayNum + 2}</button></td>
        <td><button>{dayNum + 3}</button></td>
        <td><button>{dayNum + 4}</button></td>
        <td><button>{dayNum + 5}</button></td>
        <td><button>{dayNum + 6}</button></td>
        <td><button>{dayNum + 7}</button></td>
      </>
    )
  } else {
    const lastDay = new Date(year, month + 1, 0).getDate()
    const numDays = lastDay - dayNum
    return (
      <>
        {Array(7).fill(0).map((_, i) => (
          <td key={i}><button>{i < numDays ? dayNum + i + 1 : i - numDays + 1}</button></td>
        ))}
      </>
    )
  }
}