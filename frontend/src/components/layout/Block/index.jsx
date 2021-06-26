// ======================== react =========================
import React from 'react';
// ======================== styles ========================
import * as S from "./styles";
// ====================== components ======================
import Fade from "react-reveal/Fade";
// ========================================================

const Block = ({ title, content }) => (
    <S.Container>
      <Fade left>
        <h6>{ title }</h6>
        <S.TextWrapper>
          <S.Content>{ content }</S.Content>
        </S.TextWrapper>
      </Fade>
    </S.Container>
  );

export default Block;
