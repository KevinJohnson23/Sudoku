import formatTime from "../time/formatTime"

export default function Timer({ timeSeconds }) {
  return (
    <div>
      Time: {formatTime(timeSeconds)}
    </div>
  )
}