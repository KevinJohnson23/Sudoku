export default function Cell({ columnIndex, value, cellChanged, initial, solution, autoCheck, showIncorrect, completed, filled }) {
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

  if (completed || value == solution && (initial || autoCheck)) {
    return (
      <div className={"cell-wrapper " + (initial ? "fixed" : "correct")} >
        <input
          type="text"
          className={"cell"}
          value={value || ""}
          readOnly
        />
      </div>
    )
  } else {
    return (
      <div className="cell-wrapper editable">
        <input
          className="cell"
          type="text"
          value={value || ""}
          onInput={e => handleInput(e.target)}
          onFocus={e => handleFocus(e.target)}
          onKeyUp={e => handleFocus(e.target)}
          onClick={e => handleFocus(e.target)}
        />
        {(filled && showIncorrect) || (autoCheck && value) ? <div className="incorrect-dot" /> : null}
      </div>
    )
  }
}