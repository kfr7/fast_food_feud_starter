import * as React from "react"
import "./Chip.css"
import { useState } from "react"

export function Chip({ label = "", isActive = true }) {

  const [active, setActive] = useState(isActive);

  const handleOnButtonClick = () => {
    if (active === true)
    {
      setActive(false);
    }
    else
    {
      setActive(true);
    }
  }

  return (
    <button className={active === true ? "chip active" : "chip"} onClick={handleOnButtonClick}>
      <p className="label">{label}</p>
      <span className="close" role="button">{`X`}</span>
    </button>
  )
}

export default Chip
