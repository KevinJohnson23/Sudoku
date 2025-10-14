const settingsKey = "settings"

function puzzleToString(data) {
  let string = `${data.time};`
  if (data.grid) {
    for (const row of data.grid) {
      for (const col of row) {
        string += col + ","
      }
      string += ";"
    }
  }
  return string
}

function stringToPuzzle(string) {
  if (!string) {
    return { time: 0 }
  }
  const data = {}
  const split = string.split(";");
  data.time = parseInt(split[0])
  if (split[1]) {
    data.grid = Array(9)
    for (let row = 0; row < 9; row++) {
      const numbers = split[row + 1].split(",")
      data.grid[row] = Array(9)
      for (let col = 0; col < 9; col++) {
        data.grid[row][col] = parseInt(numbers[col])
      }
    }
  }
  return data
}

function settingsToString(data) {
  let string = ""
  for (const key in data) {
    string += key + ":" + data[key] + ";"
  }
  return string
}

function stringToSettings(string) {
  if (!string) {
    return {}
  }
  const data = {}
  const split = string.split(";");
  for (const keyValue of split) {
    if (!keyValue) {
      break
    }
    const [key, value] = keyValue.split(":")
    data[key] = value == "true";
  }
  return data
}

function dateToKey(date) {
  return `${date.year}-${date.month}-${date.day}`
}

export function loadPuzzleData(date) {
  return stringToPuzzle(localStorage.getItem(dateToKey(date)))
}

function setPuzzleData(date, newPuzzleData) {
  localStorage.setItem(dateToKey(date), puzzleToString(newPuzzleData))
}

export function saveTime(date, newTime) {
  const puzzleData = loadPuzzleData(date)
  puzzleData.time = newTime
  setPuzzleData(date, puzzleData)
}

export function saveGrid(date, newGrid) {
  const puzzleData = loadPuzzleData(date)
  puzzleData.grid = newGrid
  setPuzzleData(date, puzzleData)
}

export function loadSettings() {
  return stringToSettings(localStorage.getItem(settingsKey))
}

export function saveSettings(newSettings) {
  localStorage.setItem(settingsKey, settingsToString(newSettings))
}