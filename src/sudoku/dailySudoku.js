import generate from "./generator"
import destroy from "./destroyer"
import random from "../util/random"

function getSeed(year, month, day) {
  return year * 1e4 + month * 1e2 + day
}

function getRNG(year, month, day) {
  return random(getSeed(year, month, day))
}

function getDailySudoku(year, month, day) {
  const rng = getRNG(year, month, day)
  const solution = generate(rng)
  const initial = destroy(solution, rng)
  return [solution, initial]
}

export default getDailySudoku