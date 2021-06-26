// ======================== react =========================
import React from 'react';
// ======================== styles ========================
import * as S from "./styles";
import { Row, Col } from "antd";
// ====================== components ======================
import Fade from "react-reveal/Fade";
// ========================================================

const MiddleBlock = ({ title, content, children }) => (

  <S.MiddleBlock>
    <Row type="flex" justify="center" align="middle">
      <Fade bottom>
        <S.ContentWrapper>
          <Col lg={24} md={24} sm={24} xs={24}>
            <h6>{ title }</h6>
            <S.Content>{ content }</S.Content>
            { children &&
              <S.HowContentWrapper>
                { children }
              </S.HowContentWrapper>
            }
          </Col>
        </S.ContentWrapper>
      </Fade>
    </Row>
  </S.MiddleBlock>
);

export default MiddleBlock;
