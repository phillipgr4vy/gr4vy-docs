import React from "react"
import Link from "@docusaurus/Link"
import { BsChevronDoubleRight } from "react-icons/bs"

const Card = ({ title, img, children, to }) => (
  <div className='flex-grow shadow w-72 card' >
    <div className='p-8 overflow-hidden bg-gradient-to-r from-royalblue-500 via-steel-400 to-turquoise-300'>
      <Link to={to}><img src={img} className="mx-auto rounded shadow-lg" /></Link>
    </div>
    <div className='flex-1 p-8 bg-white space-y-4'>
      <h2 className="text-primary-700">
        <Link to={to} style={{ textDecoration: "none" }}>{title}</Link>
      </h2>
      {children}
    </div>
    <div className='px-8 pb-8 text-right'>
      <Link to={to} className='inline-block px-4 py-2 pb-3 rounded-lg bg-turquoise-300 hover:bg-turquoise-800 text-primary-400' style={{ color: "#4448f4", textDecoration: "none" }}>
        <BsChevronDoubleRight className='relative inline text-md' />
      </Link>
    </div>
  </div>

)

export default Card
