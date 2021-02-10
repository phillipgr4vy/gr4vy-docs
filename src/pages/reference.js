import React from 'react';
import Layout from '@theme/Layout';
import Reference from '../modules/Reference';

const ReferencePage = () => {
  return (
    <Layout title="API Reference" >
      <Reference specUrl={'/openapi/openapi.yaml'} />
    </Layout>
  );
}

export default ReferencePage;