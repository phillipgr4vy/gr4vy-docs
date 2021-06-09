import React, { useRef } from "react"
import { RedocStandalone } from "redoc"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"

import "./reference.css"

const Reference = ({ specUrl }) => {
  const ref = useRef()
  const { siteConfig } = useDocusaurusContext()

  const openTags = () => {
    ref.current.querySelectorAll("[role=navigation] ul").forEach(element => {
      element.style.display = "block"
    })
  }

  if (specUrl.startsWith("/") && siteConfig.baseUrl != "/") {
    specUrl = `${siteConfig.baseUrl}/${specUrl}`
  }

  return (
    <div className='gr4vy__reference' ref={ref}>
      <RedocStandalone
        specUrl={specUrl}
        onLoaded={openTags}
        options={{
          disableSearch: true,
          hideDownloadButton: true,
          hideSingleRequestSampleTab: true,
          expandSingleSchemaField: true,
          jsonSampleExpandLevel: 3,
          hideSchemaTitles: true,
          simpleOneOfTypeLabel: true,
          noAutoAuth: true,
          onlyRequiredInSamples: true,
          pathInMiddlePanel: true,
          requiredPropsFirst: true,
          scrollYOffset: 60,
          sortPropsAlphabetically: true,
          theme: {
            spacing: {
              sectionVertical: ({ spacing }) => spacing.unit * 3,
            },
            colors: {
              primary: {
                main: "#1A4788"
              }
            },
            typography: {
              fontSize: "16px",
              fontFamily: "system-ui, -apple-system, \"Segoe UI\", Roboto, Ubuntu, Cantarell, \"Noto Sans\", sans- serif, system- ui, \"Segoe UI\", Helvetica, Arial, sans- serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\"",
            },
            sidebar: {
              width: "300px",
            }
          }
        }}
      />
    </div>
  )
}

export default Reference