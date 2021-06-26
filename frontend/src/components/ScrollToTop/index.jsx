import React from 'react';
import * as S from "./styles";

import scrollIcon from '../../assets/imgs/svg/scroll-top.svg'

const Input = () => {

  const scrollUp = () => {
    const element = document.getElementById("navBar");
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <S.ScrollWrapper onClick={ scrollUp }>
      <img src={ scrollIcon } alt="scroll-top" width="26px" height="26px" />
    </S.ScrollWrapper>
  );
};

export default Input;
