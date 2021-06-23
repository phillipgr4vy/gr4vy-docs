import React, { useEffect, useState } from "react"

const Root = ({ children }) => {
  const [className, setClassName] = useState("guides")

  useEffect(() => {
    if (window?.location?.href?.includes("/reference")) {
      setClassName("reference")
    }
  })

  return <div className={className}>{children}</div>
}

export default Root