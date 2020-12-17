import React from 'react';
import Layout from '@theme/Layout';
import Reference from '../modules/Reference';

const ReferencePage = () => {
  return (
    <Layout title="API Reference" >
      <Reference specUrl={'https://raw.githubusercontent.com/gr4vy/gr4vy-openapi/docs/openapi.yaml'} />
    </Layout>
  );
}

export default ReferencePage;