import { useState } from "react"

export default function Toggle({ initialState, setSetting, title }) {
  const [state, setState] = useState(initialState)

  function toggleState() {
    setSetting(!state)
    setState(!state)
  }

  return (
    <div className={"toggle " + (state ? "on" : "off")}>
      <span>{title}</span>
      <div className="switch">
        <div className="track" onClick={toggleState}>
          <div className="thumb" />
        </div>
      </div>
    </div>
  )
}