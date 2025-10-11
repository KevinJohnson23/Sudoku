import Week from "./Week"

function isCurrentMonth(year, month) {
  const currentDate = new Date()
  return month == currentDate.getMonth() && year == currentDate.getFullYear()
}

export default function Calendar({ date, setDate }) {
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
    let newDay = new Date(year, date.month, 0).getDate()
    setDate({
      year: newYear,
      month: newMonth,
      day: newDay
    })
  }

  function nextMonth() {
    let newMonth = date.month + 1
    let newYear = date.year
    if (newMonth > 11) {
      newMonth -= 12
      newYear += 1
    }
    let newDay = null
    if (isCurrentMonth(newYear, newMonth)) {
      const currentDate = new Date()
      newDay = currentDate.getDate()
    } else {
      newDay = new Date(year, date.month, 0).getDate()
    }
    setDate({
      year: newYear,
      month: newMonth,
      day: newDay
    })
  }

  return (
    <div>
      <div className="month-selector">
        <button onClick={previousMonth}>&lt;</button>
        {monthName} {year}
        {<button onClick={nextMonth} style={{ visibility: isCurrentMonth(date.year, date.month) ? "hidden" : "visible" }}>&gt;</button>}
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