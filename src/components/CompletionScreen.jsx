import { useState } from "react"

export default function CompletionScreen({isComplete}) {
  return isComplete ? (
    <div className="overlay">

    </div>
  ) : null
}