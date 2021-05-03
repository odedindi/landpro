import React from 'react';

// ============= styles & components =============
import 'bootstrap/dist/css/bootstrap.min.css';

import { Box } from 'grommet';
import DetailedDataTable from '../components/DataAnalysis/detailedDataTable';

import { AnalysisPageWrapper } from '../styles/analysisPage';
// ===============================================


const AnalysisPage = () => {
  return (
    <>
    <AnalysisPageWrapper>

    </AnalysisPageWrapper>
      <Box width="95vw" height="2xl" margin='medium' pad='medium' alignSelf='center' direction='coulmn' >
      <Box elevation='medium' width='2xl' height='100%' border>
          <DetailedDataTable />
        </Box>
        <Box align='end' justify='center' margin='medium'>
        </Box>
      </Box>
    </>
  );
};

export default AnalysisPage;
