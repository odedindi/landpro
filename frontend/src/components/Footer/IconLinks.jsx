// ==================== React and next ====================
import React from 'react';
// ======================== styles ========================
import { Col, Row } from "antd";
import * as S from "./styles";

// ======================== icons =========================
import gmailIcon from '../../assets/logos/gmail.svg'
import linkedinIcon from '../../assets/logos/linkedin-color.svg'
import githubIcon from '../../assets/logos/github.svg'

const SocialLink = ({ href, src, title }) => (
    <S.SocialLink>
        <S.NavLink
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        key={ title }
        aria-label={ title }
        >
            <img src={ src } alt={ title } width="20px" height="20px" />
        </S.NavLink>
    </S.SocialLink>
);

export const ContactPerson = ({ name, email, linkedin }) => (
    <Col lg={ 8 } md={ 8 } sm={ 12 } xs={ 14 }>                        
        <S.ContactName>{ name }</S.ContactName>                  
        <Row type='flex' justify='space-around'>
            <SocialLink
                href={ `mailto:${ email }` }
                src={ gmailIcon }
                title='gmail'
            />
            <SocialLink
                href={ `https://www.linkedin.com/in/${ linkedin }/` }
                src={ linkedinIcon }
                title='linkedin'
            />
        </Row>
    </Col>
);

export const GithubLink = (href) => (
    <SocialLink
        href={ href }
        src={ githubIcon }
        title="github"
    />
);
