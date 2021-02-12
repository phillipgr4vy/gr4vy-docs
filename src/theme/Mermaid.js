import React, { useEffect, useState } from "react"
import mermaid from "mermaid"

mermaid.initialize({
  theme: "neutral",
  startOnLoad: true
})

const Mermaid = ({ chart }) => {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    mermaid.contentLoaded()
    setLoaded(true)
  }, [])

  return <div className="mermaid" style={{
    textAlign: "center",
    visibility: loaded ? "unset" : "hidden"
  }}>{chart}</div>
}

export default Mermaid