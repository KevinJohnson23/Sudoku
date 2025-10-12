import { useState } from "react"
import Calendar from "./Calendar"

export default function SelectionScreen({ setSelectingPuzzle, selectedDate, newPuzzleFromDate }) {
  const [date, setDate] = useState(selectedDate)

  return (
    <div className="overlay" onClick={() => setSelectingPuzzle(false)}>
      <div className="center-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="center-contents">
          <h1>
            Select Puzzle
          </h1>
          <div className="calendar-container">
            <Calendar date={date} setDate={setDate} />
          </div>
          <div className="calendar-button-container">
            <button onClick={() => { newPuzzleFromDate(date) }}>Select</button>
          </div>
        </div>
      </div>
    </div>
  )
}