import React, { useState } from 'react';

// ============= styles & components =============
import 'bootstrap/dist/css/bootstrap.min.css';
import { Paragraph } from 'grommet';
import SampleCard from '../components/landProBase/sampleCard';
import { howItWorks, landproParagraphs, referencedArticles} from '../components/landProBase';
import { AboutPageWrapper, AboutTab, AboutTabs, HDIW } from '../styles/about';
// ===============================================


const AboutPage = () => {
    
  const [ showSpan, setShowSpan ] = useState('hdiw')

  const tabChangeHandler = (tabId) =>  setShowSpan(tabId);
  
  return ( 
    <AboutPageWrapper>
      <AboutTabs>
        <AboutTab onClick={ ()=> tabChangeHandler('hdiw') }>
          <span className={ showSpan === 'hdiw' && 'showSpan' }>How does it work</span>
        </AboutTab>
        <AboutTab onClick={ ()=> tabChangeHandler('insp') }>
          <span className={ showSpan === 'insp' && 'showSpan' }>Inspiration</span>
        </AboutTab>
      </AboutTabs>
      {
        showSpan === 'hdiw' && (
          <>
          <HDIW>
            { 
              howItWorks.map((stage, index) => <SampleCard stage={stage} key={index}/>) 
            }
          </HDIW> 
          <p>
            To read more, please check <a href={ referencedArticles.link }>this</a> publication.
          </p>
          </>       
        )
      }
      {
        showSpan === 'insp' && landproParagraphs.map((paragraph, index) => 
          <Paragraph fill key={index} size='medium' textAlign='center'>{paragraph}</Paragraph>
        )
      }
    </AboutPageWrapper>
  );
};
  
export default AboutPage;
