import React from "react"
import Link from "@docusaurus/Link"

const Card = ({ title, img, children, to }) => (
  <div className='flex-grow shadow w-72 card' >
    <div className='p-8 overflow-hidden bg-gradient-to-r from-royalblue-500 via-steel-400 to-turquoise-300'>
      <Link to={to}><img src={img} className="mx-auto rounded shadow-lg" /></Link>
    </div>
    <div className='p-8 bg-white space-y-4'>
      <h2 className="text-primary-700">
        <Link to={to} style={{ textDecoration: "none" }}>{title}</Link>
      </h2>
      {children}
    </div>
  </div>

)

export default Card
