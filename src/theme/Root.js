import React, { useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

const Root = ({ children }) => {
  const [className, setClassName] = useState("guides")
  const history = useHistory()

  const updateClassName = (pathname) => {
    if (!pathname) { return }
    const is_reference = pathname.includes("/reference")
    setClassName((is_reference ? "reference" : "guides"))
  }

  useEffect(() => {
    updateClassName(window?.location?.pathname)
    return history.listen((location) => updateClassName(location.pathname))
  }, [history])

  return <div className={className}>{children}</div>
}

export default Root