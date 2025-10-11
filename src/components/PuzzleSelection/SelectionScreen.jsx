import { useState } from "react"
import Calendar from "./Calendar"

export default function SelectionScreen({ selectedDate, newPuzzleFromDate }) {
  const [date, setDate] = useState(selectedDate)

  return (
    <div className="overlay">
      <div className="center-overlay">
        <h1>
          Select a Puzzle
        </h1>
        <div>
          <Calendar date={date} setDate={setDate} />
        </div>
        <div>
          <button onClick={() => { newPuzzleFromDate(date) }}>Play</button>
        </div>
      </div>
    </div>
  )
}