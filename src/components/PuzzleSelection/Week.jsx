import { useState } from "react"

export default function Week({ date, row, setDate }) {

  const year = date.year
  const month = date.month

  let firstDay = new Date(year, month, 1).getDay()
  let lastDay = new Date(year, month + 1, 0).getDate()
  let prevLastDay = new Date(year, month, 0).getDate()
  let offset = 0
  if (firstDay <= 0) {
    row -= 1
    offset = 7
  }
  let dayNum = row * 7 - firstDay + 1

  function setDay(day) {
    let newDay = day
    let newMonth = month
    let newYear = year
    if (day > lastDay) {
      newMonth += 1
      if (newMonth > 11) {
        newMonth -= 12
        newYear += 1
      }
      newDay -= lastDay
    } else if (day <= 0) {
      newMonth -= 1
      if (newMonth < 0) {
        newMonth += 12
        newYear -= 1
      }
      newDay += prevLastDay
    }

    setDate({
      year: newYear,
      month: newMonth,
      day: newDay
    })
  }

  return (
    <>
      {
        Array(7).fill(0).map((_, i) => (
          <td key={i}><button onClick={() => setDay(dayNum + i + 1)}>{
            dayNum + i < 0 ?
              prevLastDay + i - firstDay + 2 - offset
              : dayNum + i >= lastDay ?
                dayNum + i - lastDay + 1
                : dayNum + i + 1
          }</button></td>
        ))
      }
    </>
  )
}