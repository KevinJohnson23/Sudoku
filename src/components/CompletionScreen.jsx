import formatTime from "../util/formatTime"

export default function CompletionScreen({ setAdmiringPuzzle, startSelectingPuzzle, time }) {
  return (
    <div className="overlay">
      <div className="center-overlay">
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