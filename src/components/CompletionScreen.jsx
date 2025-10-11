import formatTime from "../util/formatTime"

export default function CompletionScreen({ completed, newPuzzle, time }) {
  return completed ? (
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