import React from "react"

const Cards = ({ children }) => (
  <div className='flex flex-row flex-wrap gap-8 gap-y-16' >
    {children}
  </div>
)

export default Cards
