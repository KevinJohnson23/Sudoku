import { useState } from "react"

export default function SettingsScreen({ settings, setSettings }) {
  return (
    <div className="overlay" onClick={() => setSelectingPuzzle(false)}>
      <div className="center-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="center-contents">
          <h1>
            Settings
          </h1>
          <div className="center-body">

          </div>
          <div className="center-button-container">
            <button onClick={() => setSettings(settings)}>Confirm</button>
          </div>
        </div>
      </div>
    </div>
  )
}