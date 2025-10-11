import { useState } from "react"

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
    </div>
  )
}