import React, { useLayoutEffect, useState } from "react"

const Root = ({ children }) => {
  const [className, setClassName] = useState("guides")

  useLayoutEffect(() => {
    if (window?.location?.href?.indexOf?.("/reference") != -1) {
      setClassName("reference")
    }
  })

  return <div className={className}>{children}</div>
}

export default Root