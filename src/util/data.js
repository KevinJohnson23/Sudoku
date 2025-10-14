const settingsKey = "settings"

function dataToString(data) {
  let string = ""
  for (const key in data) {
    string += key + ":" + data[key] + ";"
  }
  return string
}

function stringToData(string) {
  const data = {}
  const split = string.split(";");
  for (const keyValue of split) {
    if (!keyValue) {
      break
    }
    const [key, value] = keyValue.split(":")
    data[key] = value;
  }
  return data
}

export function loadPuzzleData(date) {
  return stringToData(localStorage.getItem(date))
}

function setPuzzleData(date, newPuzzleData) {
  localStorage.setItem(date, dataToString(newPuzzleData))
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
  return stringToData(localStorage.getItem(settingsKey))
}

export function saveSettings(newSettings) {
  localStorage.setItem(settingsKey, dataToString(newSettings))
}