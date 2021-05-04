import React from 'react';

// ============= styles & components =============
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailedDataTable from '../components/DataAnalysis/detailedDataTable';

import { AnalysisPageWrapper } from '../styles/analysisPage';

import { DataTable } from '../components/dataTable';
// ===============================================
// =============== temp data =====================
import { data } from '../components/dataTable/tempData';
// ===============================================

const AnalysisPage = () => {
  return (
    <>
    <AnalysisPageWrapper>
          <DetailedDataTable />
          {/* <div style={{ height: '50em', width: '100%'}}>

          <DataTable data={data} />
          </div> */}
    </AnalysisPageWrapper>
    </>
  );
};

export default AnalysisPage;
