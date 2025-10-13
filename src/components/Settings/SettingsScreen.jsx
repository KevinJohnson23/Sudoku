import { useState } from "react"
import Toggle from "./Toggle"

export default function SettingsScreen({ setChangingSettings, settings, setSettings }) {
  function newToggle(settingName, title) {
    return <Toggle
      initialState={settings[settingName]}
      setSetting={(state) => { settings[settingName] = state }}
      title={title}
    />
  }
  return (
    <div className="overlay" onClick={() => setChangingSettings(false)}>
      <div className="center-overlay" onClick={(e) => e.stopPropagation()}>
        <div className="center-contents">
          <h1>
            Settings
          </h1>
          <div className="center-body">
            <div className="settings-scroller">
              {newToggle("showTimer", "Show Timer")}
            </div>
          </div>
          <div className="center-button-container">
            <button onClick={() => setSettings(settings)}>Apply</button>
          </div>
        </div>
      </div>
    </div>
  )
}