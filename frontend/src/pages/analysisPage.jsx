import React from 'react';

// ============= styles & components =============

import { AnalysisPageWrapper } from '../styles/analysisPage';

// ===============================================
// ==================== data =====================
// ===============================================

const AnalysisPage = () => {
  return (
    <>
    <AnalysisPageWrapper>
    <p>this application is in <b>{process.env.NODE_ENV}</b> mode.</p>
    </AnalysisPageWrapper>
    </>
  );
};

export default AnalysisPage;
