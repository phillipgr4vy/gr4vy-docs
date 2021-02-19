
import React from "react"
import Link from "@docusaurus/Link"
import { BsChevronDoubleRight } from "react-icons/bs"

const Next = ({ children, to }) => (
  <Link
    to={to}
    className="flex float-right px-6 py-2 align-middle rounded bg-primary-500 gap-2 hover:bg-primary-600"
    style={{ textDecoration: "none", color: "white" }}
  >
    {children}
    <BsChevronDoubleRight className="relative top-1" />
  </Link>
)

export default Next
