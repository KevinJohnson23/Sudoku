export default function PauseScreen({ paused, setPaused }) {
  return paused ? (
    <div className="grid-overlay" onClick={() => { setPaused(false) }}>
      <span className="grid-overlay-contents">
        <h1>Paused</h1>
        <p>Click to continue playing</p>
      </span>
    </div>
  ) : null
}