import React from "react"
import Layout from "@theme/Layout"
import Reference from "../../modules/Reference"

const ReferencePage = () => {
  const BASE_URL = process.env.BASE_URL || "/"
  var url = BASE_URL + "openapi/openapi.v1.json";
  return (
    <Layout title="API Reference" >
      <Reference specUrl={url} />
    </Layout>
  )
}

export default ReferencePage