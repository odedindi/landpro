// ======================== react =========================
import React from 'react';
// ======================== style =========================
import * as S from "../styles";
import { Col } from "antd";
// ===================== components =======================
import Slide from "react-reveal/Slide";
//=========================================================

const LeftContentBlock = ({ icon, iconAlt, title, content, 
  children, id }) => (
    <S.BlockContainer id={id}>
        <Col lg={8} md={16} sm={18} xs={24}>
          <Slide left>
            <img
              src={icon}
              alt={ iconAlt }
              width="100%"
              height="100%"
              style={{ textAlign: 'center' }}
            />
          </Slide>
        </Col>
        <Col lg={14} md={24} sm={24} xs={24}>
          <Slide right>
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
    </S.BlockContainer>
);

export default LeftContentBlock;
