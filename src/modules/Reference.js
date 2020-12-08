import React, { useEffect, useState } from 'react';
import { RedocStandalone } from 'redoc';
import openapiFilter from 'openapi-filter';
import axios from 'axios';
import Loader from 'react-loader-spinner'
import styles from './reference.module.scss';

const filterInternal = (spec, showInternal = false) => {
  if (showInternal) { return spec }
  spec = openapiFilter.filter(spec)
  spec.tags = spec.tags.filter(tag => !tag['x-internal'])
  return spec
}

const Reference = ({ showInternal = false }) => {
  const [spec, setSpec] = useState(null)

  useEffect(() => {
    axios.get(`https://raw.githubusercontent.com/gr4vy/gr4vy-openapi/openapi-3.0/openapi.v1.json`)
      .then(response => filterInternal(response.data, showInternal))
      .then(data => setSpec(data))
  }, [showInternal])

  return (
    <div className={styles.reference}>
      {spec ? (
        <RedocStandalone
          spec={spec}
          options={{
            disableSearch: true,
            expandResponses: "200,201,202,204",
            hideDownloadButton: true,
            hideSingleRequestSampleTab: true,
            expandSingleSchemaField: true,
            jsonSampleExpandLevel: 5,
            hideSchemaTitles: true,
            simpleOneOfTypeLabel: true,
            noAutoAuth: true,
            onlyRequiredInSamples: true,
            pathInMiddlePanel: true,
            requiredPropsFirst: true,
            scrollYOffset: 60,
            sortPropsAlphabetically: true,
            hideLoading: true,
            theme: {
              spacing: {
                sectionVertical: ({ spacing }) => spacing.unit * 3,
              },
              colors: {
                primary: {
                  main: "#368871"
                }
              },
              typography: {
                fontSize: '16px',
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans- serif, system- ui, "Segoe UI", Helvetica, Arial, sans- serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              },
              sidebar: {
                width: '300px',
              }
            }
          }}
        />
      ) : (
          <div className={styles.loader}>
            <Loader
              type="Grid"
              color="#358980"
              height={50}
              width={50}
            />
          </div>
        )}
    </div>
  );
}

export default Reference;