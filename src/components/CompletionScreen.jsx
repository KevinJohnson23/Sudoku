import formatTime from "../time/formatTime"

export default function CompletionScreen({ isComplete, newPuzzle, time }) {
  return isComplete ? (
    <div className="overlay">
      <div className="center-overlay">
        <h1>
          Puzzle Complete!
        </h1>
        <p className="completion-text">
          You took {formatTime(time)} to finish
        </p>
        <button
          className="play-again-button"
          onClick={newPuzzle}
        >
          New Puzzle
        </button>
      </div>
    </div>
  ) : null
}