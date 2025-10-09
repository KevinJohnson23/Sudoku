export default function Cell({columnIndex, value, cellChanged}) {
  function isInputValid(newValue) {
    if (!Number.isInteger(newValue)) {
      return false
    }
    return newValue >= 1 && newValue <= 9
  }

  function handleInput(inputBox) {
    let inputValue = inputBox.value
    let newValue = inputValue.slice(-1)
    if (newValue === "") {
      cellChanged(columnIndex, "")
      return
    }
    newValue = parseInt(newValue)
    if (isInputValid(newValue)) {
      cellChanged(columnIndex, newValue)
      inputBox.value = newValue
    } else {
      inputBox.value = inputValue.slice(1) || ""
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