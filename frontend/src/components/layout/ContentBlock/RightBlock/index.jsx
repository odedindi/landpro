// ======================== React =========================
import React, { lazy } from 'react';
// ======================== style =========================
import * as S from "../styles";
// ====================== components ======================
import { Col } from "antd";
import Slide from "react-reveal/Slide";

const AyoraExample = lazy(() => import('../../../Carousel/ayora'))
// ========================================================


const RightBlock = ({ title, content, children, icon, 
  iconAlt, t, id }) => (
    <S.BlockContainer id={id}>
        <Col lg={10} md={12} sm={24} xs={24}>
          <Slide left>
            <S.ContentWrapper>
              <h6>{ title }</h6>
              <S.Content>{ content }</S.Content>
              { 
                children && 
                  <S.ChildrenWrapper>{ children }</S.ChildrenWrapper>
              }
            </S.ContentWrapper>
          </Slide>
        </Col>
        <Col lg={10} md={12} sm={24} xs={24}>
          <Slide right>
            { icon === 'ayoraExample' ? 
              <>
                <AyoraExample /> 
              </>
              :
              <img
                  src={icon}
                  alt={ iconAlt }
                  width="100%"
                  height="100%"
                  style={{ textAlign: 'center' }}
              />
            }
          </Slide>
        </Col>
    </S.BlockContainer>
  );

export default RightBlock;
