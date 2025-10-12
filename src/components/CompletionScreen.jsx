import formatTime from "../util/formatTime"

export default function CompletionScreen({ setAdmiringPuzzle, startSelectingPuzzle, time }) {
  return (
    <div className="overlay" onClick={() => setSelectingPuzzle(false)}>
      <div className="center-overlay" onClick={(e) => e.stopPropagation()}>
        <h1>
          Puzzle Complete!
        </h1>
        <p className="completion-text">
          You took {formatTime(time)} to finish
        </p>
        <div>
          <button className="center-button" onClick={() => startSelectingPuzzle(true)}>
            Play More Puzzles
          </button>
        </div>
        <div>
          <button className="center-button" onClick={() => setAdmiringPuzzle(true)}>
            Admire Puzzle
          </button>
        </div>
      </div>
    </div>
  )
}