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
      day: new Date(year, date.month, 0).getDate()
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
      day: 1
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
          <tr><Week date={date} setDate={setDate} row={0} /></tr>
          <tr><Week date={date} setDate={setDate} row={1} /></tr>
          <tr><Week date={date} setDate={setDate} row={2} /></tr>
          <tr><Week date={date} setDate={setDate} row={3} /></tr>
          <tr><Week date={date} setDate={setDate} row={4} /></tr>
          <tr><Week date={date} setDate={setDate} row={5} /></tr>
        </tbody>
      </table>
    </div>
  )
}