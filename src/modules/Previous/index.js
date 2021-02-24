
import React from "react"
import Link from "@docusaurus/Link"
import { BsChevronDoubleLeft } from "react-icons/bs"

const Previous = ({ children, to }) => (
  <Link
    to={to}
    className="flex float-left w-5/12 px-6 py-2 mt-8 align-middle rounded bg-primary-700 gap-2 hover:bg-primary-800"
    style={{ textDecoration: "none", color: "white" }}
  >
    <BsChevronDoubleLeft className="relative top-1" />
    {children}
  </Link>
)

export default Previous
