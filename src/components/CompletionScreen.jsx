import { useState } from "react"

export default function CompletionScreen({ isComplete, newPuzzle }) {
  return isComplete ? (
    <div className="overlay">
      <div className="center-overlay">
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