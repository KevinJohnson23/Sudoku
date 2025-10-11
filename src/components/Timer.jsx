import formatTime from "../util/formatTime"

const PAUSE_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/3/34/Controls_pause.svg"
const PLAY_IMAGE = "https://upload.wikimedia.org/wikipedia/commons/0/06/Controls_play.svg"

export default function Timer({ timeSeconds, paused, setPaused, hidePause }) {
  return (
    <div>
      Time: {formatTime(timeSeconds)}
      {
        !hidePause ?
          <button onClick={setPaused}><img src={paused ? PLAY_IMAGE : PAUSE_IMAGE} /></button>
          : null
      }
    </div>
  )
}