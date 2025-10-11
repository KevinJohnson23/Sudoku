export default function PauseScreen({ paused, setPaused }) {
  return paused ? (
    <div className="grid-overlay" onClick={() => { setPaused(false) }}>
      <h1>Game Paused</h1>
      <p>Click to unpause</p>
    </div>
  ) : null
}