import formatTime from "../util/formatTime"

const PAUSE_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/3/34/Controls_pause.svg"
const PLAY_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/0/06/Controls_play.svg"

export default function Timer({ timeSeconds, paused, setPaused, hidePause }) {
  return (
    <div className="timer-container">
      {
        !hidePause ?
          <button className="pause-button" onClick={setPaused}><img src={paused ? PLAY_IMAGE : PAUSE_IMAGE} /></button>
          : null
      }
      <h2 className="timer-text">{formatTime(timeSeconds)}</h2>
    </div>
  )
}