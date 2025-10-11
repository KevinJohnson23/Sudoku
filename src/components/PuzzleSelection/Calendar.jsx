import { useState } from "react"
import Week from "./Week"

export default function Calendar({ selectedDate }) {
  const [date, setDate] = useState(selectedDate)

  const d = new Date(date.year, date.month, date.day)
  const year = date.year
  const monthName = d.toLocaleString("default", { month: "long" })

  function previousMonth() {
    let newMonth = date.month - 1
    let newYear = date.year
    if (newMonth < 0) {
      newMonth += 12
      newYear -= 1
    }
    setDate({
      year: newYear,
      month: newMonth,
      day: date.day
    })
  }

  function nextMonth() {
    let newMonth = date.month + 1
    let newYear = date.year
    if (newMonth > 11) {
      newMonth -= 12
      newYear += 1
    }
    setDate({
      year: newYear,
      month: newMonth,
      day: date.day
    })
  }

  return (
    <div>
      <div>
        <button onClick={previousMonth}>&lt;</button>
        {monthName} {year}
        <button onClick={nextMonth}>&gt;</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Mon</th>
            <th>Tue</th>
            <th>Wed</th>
            <th>Thu</th>
            <th>Fri</th>
            <th>Sat</th>
            <th>Sun</th>
          </tr>
        </thead>
        <tbody>
          <tr><Week year={date.year} month={date.month} row={0} setDate={setDate} /></tr>
          <tr><Week year={date.year} month={date.month} row={1} setDate={setDate} /></tr>
          <tr><Week year={date.year} month={date.month} row={2} setDate={setDate} /></tr>
          <tr><Week year={date.year} month={date.month} row={3} setDate={setDate} /></tr>
          <tr><Week year={date.year} month={date.month} row={4} setDate={setDate} /></tr>
        </tbody>
      </table>
    </div>
  )
}