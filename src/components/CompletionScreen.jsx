import formatTime from "../util/formatTime"

export default function CompletionScreen({ setAdmiringPuzzle, startSelectingPuzzle, time }) {
  return (
    <div className="overlay" onClick={() => setAdmiringPuzzle(true)}>
      <div className="center-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="center-contents">
          <h1>
            Puzzle Finished!
          </h1>
          <p>
            You took {formatTime(time)} to finish.
          </p>
          <div className="completion-screen-buttons">
            <div className="center-button-container">
              <button onClick={() => startSelectingPuzzle(true)}>More Puzzles</button>
            </div>
            <div className="center-button-container">
              <button onClick={() => setAdmiringPuzzle(true)}>Admire Puzzle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}