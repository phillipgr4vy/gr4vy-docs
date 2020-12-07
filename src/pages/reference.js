import React from 'react';
import Layout from '@theme/Layout';
import { RedocStandalone } from 'redoc';
import styles from './reference.module.scss';

function Reference() {
  return (
    <Layout title="API Reference" >
      <div className={styles.reference}>
        <RedocStandalone
          specUrl="https://raw.githubusercontent.com/gr4vy/gr4vy-openapi/openapi-3.0/openapi.v1.json"
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
                fontFamily: 'system-ui, -apple-system, "Segoe UI", Roboto, Ubuntu, Cantarell, "Noto Sans", sans- serif, system- ui, "Segoe UI", Helvetica, Arial, sans- serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
              },
              sidebar: {
                width: '300px',
              }
            }
          }}
        />
      </div>
    </Layout>
  );
}

export default Reference;