// ==================== React and next ====================
import React, { lazy } from 'react';
// ======================== styles ========================
import { Row, Col } from "antd";
import Fade from "react-reveal/Fade";
import * as S from "./styles";
// ===================== translations =====================
import { useTranslation } from 'react-i18next';
// ======================= icon ===========================
import logo from '../../assets/logos/logo.png';
// ====================== components ======================
import { ContactPerson, GithubLink } from './IconLinks';

const Container = lazy(() => import('../layout/Container'));
const SelectLanguage = lazy(() => import('../SelectLanguage'));
// ========================================================

const Footer = () => {

    const { t } = useTranslation()

    const contacts = [
        {
            name: 'Matteo J.R.',
            email: 'matteo.jriva@gmail.com',
            linkedin: 'matteojriva'
        },
        {
            name: 'Oded W.',
            email: 'oded.winberger@gmail.com',
            linkedin: 'odedw'
        }
    ];
    return (
        <>
        <Fade cascade bottom>
            <S.Footer>
                <Container>
                    <Row type='flex' justify='space-between'>
                        <Col lg={ 12 } md={ 14 } sm={ 16 } xs={ 24 }>
                            <S.Title>{ t("footer.contact") }</S.Title>
                            <br/>
                            <S.Paragraph>{ t(`footer.description`) }</S.Paragraph>
                            <br/>
                        </Col>
                        <Col lg={ 12 } md={ 14 } sm={ 16 } xs={ 24 }>    
                            {
                                contacts.map(contact => 
                                    <ContactPerson key={ contact.name } name={ contact.name }
                                        email={ contact.email } linkedin={ contact.linkedin }
                                    />   
                                )
                            }           
                        </Col>
                    </Row>
                    <Row type='flex' justify='space-around'>
                        <Col lg={ 6 } md={ 6 } sm={ 6 } xs={ 24 }>
                            <S.Title>{ t("footer.company") }</S.Title>
                            <S.FooterLink href="/about">{ t("footer.about") }</S.FooterLink>
                            
                            <S.FooterLink 
                                href="https://www.societybyte.swiss/en/2021/05/25/how-an-app-evaluates-the-climate-data-of-different-land-areas-a-solution-from-hack-the-climate/"
                                target="_blank" 
                                rel="noreferrer"    
                            >
                                { t("footer.press") }
                            </S.FooterLink> 
                            <S.FooterLink href="/#">{ t("footer.career") }</S.FooterLink>                   
                        </Col>
                        <Col lg={ 4 } md={ 4 } sm={ 4 } xs={ 24 }>
                            <S.Title>{ t("footer.language") }</S.Title>
                            <S.SelectLanguageWrapper>
                                <SelectLanguage />
                            </S.SelectLanguageWrapper>
                        </Col>
                               
                    </Row>

                </Container>
            </S.Footer>
        <S.Extra>
            <Container border="true">
                <S.FooterContainer>
                        <S.LogoContainer>
                        <img aria-label="homepage" height="64px" src={ logo } alt='landpro logo'/>
                        <p>&copy;{ new Date().getFullYear() }</p>
                        </S.LogoContainer>
                        <GithubLink href="https://github.com/ciskoh/climate_hackathon"/>
                </S.FooterContainer>
            </Container>
        </S.Extra>
        </Fade>
        </>
    )
};

export default Footer;