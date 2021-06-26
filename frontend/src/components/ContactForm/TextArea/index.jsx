import { withTranslation } from "react-i18next";

import * as S from "./styles";

const TextArea = ({ name, id, onChange, t }) => (
  <S.Container>
    <label htmlFor={name}>{t(`homePage.contact.form.${ id }`)}</label>
    <S.TextArea
      spellcheck="false"
      id={name}
      name={name}
      onChange={onChange}
    />
  </S.Container>
);

export default withTranslation()(TextArea);