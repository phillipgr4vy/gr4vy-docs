import React from "react"
import Layout from "@theme/Layout"
import Reference from "../../modules/Reference"

const ReferencePage = () => {
  return (
    <Layout title="API Reference" >
      <Reference specUrl={"https://gr4vy.github.io/payment-service-openapi/openapi.v1.json"} />
    </Layout>
  )
}

export default ReferencePage