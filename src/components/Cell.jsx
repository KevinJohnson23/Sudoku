import { useState } from "react"

export default function Cell() {
  const [value, setValue] = useState(0);

  function isInputValid(newValue) {
    if (!Number.isInteger(newValue)) {
      return false
    }
    return newValue >= 0 && newValue <= 9
  }

  function handleInput(inputBox) {
    let newValue = inputBox.value
    newValue = newValue.slice(-1)
    if (newValue === "") {
      setValue(null)
      return
    }
    newValue = parseInt(newValue)
    if (isInputValid(newValue)) {
      setValue(newValue)
      inputBox.value = newValue
    } else {
      inputBox.value = value
    }
  }

  return (
    <input 
      type="text" 
      className="cell"
      value={value}
      onInput={e => handleInput(e.target)}
    />
  )
}