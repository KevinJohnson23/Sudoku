import Week from "./Week"

const LT = "https://upload.wikimedia.org/wikipedia/commons/8/8f/U%2B25C0.svg"
const GT = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/U%2B25B6.svg/180px-U%2B25B6.svg.png?20170228072111"

function isCurrentMonth(year, month) {
  const currentDate = new Date()
  return month == currentDate.getMonth() && year == currentDate.getFullYear()
}

export default function Calendar({ date, setDate }) {
  const d = new Date(date.year, date.month, date.day)
  const year = date.year
  const monthName = d.toLocaleString("default", { month: "long" })
  const isCurrentMonthSelected = isCurrentMonth(date.year, date.month)

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
      newDay = new Date(year, newMonth + 1, 0).getDate()
    }
    setDate({
      year: newYear,
      month: newMonth,
      day: newDay
    })
  }

  function newWeek(row) {
    return (
      <tr>
        <Week
          date={date}
          setDate={setDate}
          row={row}
          maxDate={isCurrentMonthSelected ? new Date().getDate() : null}
        />
      </tr>
    )
  }

  return (
    <div className="calendar">
      <div className="month-selector">
        <button onClick={previousMonth} className="enabled"><img src={LT} /></button>
        {monthName} {year}
        {<button onClick={isCurrentMonthSelected ? null : nextMonth} className={isCurrentMonthSelected ? "disabled" : "enabled"}><img src={GT} /></button>}
      </div>
      <table className="day-selector">
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
          {newWeek(0)}
          {newWeek(1)}
          {newWeek(2)}
          {newWeek(3)}
          {newWeek(4)}
          {newWeek(5)}
        </tbody>
      </table>
    </div>
  )
}