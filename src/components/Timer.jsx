function fixSingleDigits(number) {
  let numberString = number.toString()
  if (numberString.length == 1) {
    return "0" + numberString
  }
  return numberString
}

function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600)
  seconds %= 3600
  const minutes = Math.floor(seconds / 60)
  seconds %= 60

  if (hours > 0) {
    return `${hours}:${fixSingleDigits(minutes)}:${fixSingleDigits(seconds)}`
  } else if (minutes > 0) {
    return `${minutes}:${fixSingleDigits(seconds)}`
  } else {
    return `0:${fixSingleDigits(seconds)}`
  }
}

export default function Timer({ timeSeconds }) {
  return (
    <div>
      Time: {formatTime(timeSeconds)}
    </div>
  )
}