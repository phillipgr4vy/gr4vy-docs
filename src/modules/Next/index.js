
import React from "react"
import Link from "@docusaurus/Link"
import { BsChevronDoubleRight } from "react-icons/bs"

const Next = ({ children, to }) => (
  <Link
    to={to}
    className="flex justify-end float-right w-5/12 px-6 py-2 mt-8 align-middle rounded bg-primary-700 gap-2 hover:bg-primary-800"
    style={{ textDecoration: "none", color: "white" }}
  >
    {children}
    <BsChevronDoubleRight className="relative top-1" />
  </Link>
)

export default Next
