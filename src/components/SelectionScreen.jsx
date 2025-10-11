import Calendar from "./Calendar"

export default function SelectionScreen({ selectingPuzzle, setSelectingPuzzle, selectedDate }) {
  return selectingPuzzle ? (
    <div className="overlay">
      <div className="center-overlay">
        <h1>
          Select a Puzzle
        </h1>
        <div>
          <Calendar selectedDate={selectedDate} />
        </div>
      </div>
    </div>
  ) : null
}