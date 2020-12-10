import React from 'react';
import { RedocStandalone } from 'redoc';
import openapiFilter from 'openapi-filter';
import styles from './reference.module.scss';

let spec = require('../../static/openapi.v1.json')

const filterInternal = (spec, showInternal = false) => {
  if (showInternal) { return spec }
  spec = openapiFilter.filter(spec)
  spec.tags = spec.tags.filter(tag => !tag['x-internal'])
  return spec
}

const Reference = ({ showInternal = false }) => {
  if (!showInternal) { spec = filterInternal(spec, showInternal) }

  return (
    <div className={styles.reference}>
      <RedocStandalone
        spec={spec}
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
    </div>
  );
}

export default Reference;