// ======================== react =========================
import React, { lazy } from 'react';
// ======================== styles ========================
import * as S from '../styles/homePage'
import { Row } from 'antd';
// ===================== translations =====================
import { useTranslation } from 'react-i18next';
// ========================= icons ========================
import greenField from '../assets/imgs/svg/greenField.png'
import plantInHands from '../assets/imgs/svg/plantInHands.png'
import farmland from '../assets/imgs/svg/farmland.png'
// ====================== components ======================
const Button = lazy(() => import('../components/Button'));
const ContactFrom = lazy(() => import("../components/ContactForm"));
const ContentBlock = lazy(() => import("../components/layout/ContentBlock"));
const MiddleBlock = lazy(() => import("../components/layout/MiddleBlock"));
const LandProCarousel = lazy(() => import('../components/Carousel/landpro'))
const SectionCard = lazy(() => import('../components/layout/ContentBlock/sectionCard'))
// =========================================================

const HomePage = () => {
  const { t } = useTranslation();
  const scrollTo = (id) => {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
  };

  const PageNavi = () => {
    return (
      <S.Header id='pageNavi'>
      <S.Container>
        <Row gutter={15} type='flex' justify="start" align='middle'>
          <S.PageLink onClick={ () => scrollTo('about') }>
            <S.Span>{ t('homePage.links.Product') }</S.Span>
          </S.PageLink>

          <S.PageLink onClick={ () => scrollTo('mission') }>
            <S.Span>{ t('homePage.links.Mission') }</S.Span>
          </S.PageLink>

          <S.PageLink onClick={ () => scrollTo('contact') } style={{ width: '125px' }} >
            <S.Span><Button>{ t('homePage.links.Contact') }</Button></S.Span>
          </S.PageLink>  
        </Row>
      </S.Container>
    </S.Header>
    )
  }

  return (
    <>
      <PageNavi/>
      
      <ContentBlock first="true" id="intro" type="right"
        title={ t('homePage.intro.title') } 
        content={ t('homePage.intro.text') } 
        icon={ greenField } iconAlt='greenField'
      />      
      <MiddleBlock
        title={ t('homePage.introSub.title') }
        content={ t('homePage.introSub.text') }
      />

      <ContentBlock type='left' id='about'
        title={ t('homePage.about.title') }
        content={ t('homePage.about.text') }
        icon={ plantInHands }
        iconAlt="plant in hands"
      >
      {
        ['section1', 'section2', 'section3'].map((section, index) => 
          <SectionCard key={ section }
            title={ t(`homePage.about.${ section }Title`) }
            content={ t(`homePage.about.${ section }Content`) }
            span={ index !== 2 ? 10 : 20 }
          />
        )
      }
      </ContentBlock>

      <ContentBlock
          type="right"
          title={ t('homePage.mission.title') }
          content={ t('homePage.mission.text') }
          icon="ayoraExample"
          id="mission"
        /> 

      <MiddleBlock title={ t('homePage.how.title') }>
        <LandProCarousel/>
      </MiddleBlock>

      <ContentBlock type="left" id="product"         
          title={ t('homePage.product.title') }
          content={ t('homePage.product.text') }
          icon={ farmland }
          iconAlt="farmland"         
        />

{/*         <ContactFrom id="contact"
          title={ t('homePage.contact.title') }
        /> */}
    </>

  );
};

export default HomePage;
