export default function CompletionScreen({ isComplete, newPuzzle }) {
  return isComplete ? (
    <div className="overlay">
      <div className="center-overlay">
        <h1>
          Puzzle Complete!
        </h1>
        <p className="completion-text">
          You took hh:mm:ss to finish
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