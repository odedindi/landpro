// ======================== react =========================
import React/*, { lazy, useState }*/ from 'react';
// ======================== styles ========================
// import { AboutPageWrapper, AboutTab, AboutTabs } from '../styles/about';
// ===================== translations =====================
// import { useTranslation } from 'react-i18next';

// ====================== components ======================
// import { landproParagraphs, referencedArticles} from '../components/landProBase';


// const Container = lazy(() => import("../components/layout/Container"));

// ===============================================

const AboutPage = () => {
  // const [ t ] = useTranslation();
  // const [ showSpan, setShowSpan ] = useState('hdiw')

  // const tabChangeHandler = (tabId) =>  setShowSpan(tabId);
  
  return ( 
    <>
  <p>LandPro</p>
    </>
      // <AboutPageWrapper>
      //   <AboutTabs>
      //     <AboutTab onClick={ ()=> tabChangeHandler('hdiw') }>
      //       <span className={ showSpan === 'hdiw' && 'showSpan' }>How does it work</span>
      //     </AboutTab>
      //     <AboutTab onClick={ ()=> tabChangeHandler('insp') }>
      //       <span className={ showSpan === 'insp' && 'showSpan' }>Inspiration</span>
      //     </AboutTab>
      //   </AboutTabs>
      //   {
      //     showSpan === 'hdiw' && (
      //       <>
      //       <p>
      //         To read more, please check <a href={ referencedArticles.link }>this</a> publication.
      //       </p>
      //       </>       
      //     )
      //   }
      //   {
      //     showSpan === 'insp' && landproParagraphs.map((paragraph, index) => 
      //       <p key={index} >{paragraph}</p>
      //     )
      //   }
      // </AboutPageWrapper>

  );
};
  
export default AboutPage;
