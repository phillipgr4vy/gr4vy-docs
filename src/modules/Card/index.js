import React from "react"
import Link from "@docusaurus/Link"

const Card = ({ title, children, action, to }) => (
  <section className="mb-10 overflow-hidden border border-gray-200 rounded-lg">
    <div className="p-8">
      <h2>{title}</h2>
      <div className="py-8">{children}
        <Link
          style={{ textDecoration: "none" }}
          className="flex float-right px-4 py-2 no-underline align-baseline border rounded text-red-50 hover:no-underline"
          to={to}
        >
          {action}
        </Link>
      </div>

    </div>
  </section>
)

export default Card
