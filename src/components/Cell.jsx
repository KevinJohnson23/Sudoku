export default function Cell({columnIndex, value, cellChanged}) {
  function isInputValid(newValue) {
    if (!Number.isInteger(newValue)) {
      return false
    }
    return newValue >= 1 && newValue <= 9
  }

  function handleInput(inputBox) {
    const inputValue = inputBox.value
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

  function handleFocus(inputBox) {
    const length = inputBox.value.length
    inputBox.setSelectionRange(length, length)
  }

  return (
      <input 
        type="text" 
        className="cell"
        value={value || ""}
        onInput={e => handleInput(e.target)}
        onFocus={e => handleFocus(e.target)}
        onKeyUp={e => handleFocus(e.target)}
        onClick={e => handleFocus(e.target)}
      />
    )
}