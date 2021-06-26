// ======================== react =========================
import React, { lazy } from 'react';
// ======================== styles ========================
import { Row, Col } from "antd";
import * as S from "./styles";
// ===================== translations =====================
import { withTranslation } from "react-i18next";
// ====================== components ======================
import Fade from "react-reveal/Fade";
import useForm from "./useForm";
import validate from "./validationRules";

const Block = lazy(() => import("../layout/Block"));
const Button = lazy(() => import("../Button"));
const Input = lazy(() => import("./Input"));
const TextArea = lazy(() => import("./TextArea"));
// =========================================================

const Contact = ({ title, content, id, t }) => {
  const { values, errors, handleChange, handleSubmit } = useForm(validate);

  const ValidationType = ({ type }) => {
    const ErrorMessage = errors[type];
    return errors[type] ? (
      <Fade cascade>
        <S.Span>{ErrorMessage}</S.Span>
      </Fade>
    ) : (
      <S.Span />
    );
  };

  return (
    <S.ContactContainer id={id}>
      <S.Contact>
        <Row type="flex" justify="space-between" align="middle">
          <Col lg={12} md={11} sm={24}>
            <Block padding={true} title={title} content={content} />
          </Col>
          <Col lg={12} md={12} sm={24}>
            <S.FormGroup autoComplete="off" onSubmit={handleSubmit}>
              <Col span={24}>
                <Input
                  type="text"
                  name="name"
                  id="Name"
                  placeholder="NamePlaceholder"
                  value={values.name || ""}
                  onChange={handleChange}
                />
                <ValidationType type="name" />
              </Col>
              <Col span={24}>
                <Input
                  type="text"
                  name="email"
                  id="Email"
                  placeholder="EmailPlaceholder"
                  value={values.email || ""}
                  onChange={handleChange}
                />
                <ValidationType type="email" />
              </Col>
              <Col span={24}>
                <TextArea
                  name="message"
                  id="Message"
                  placeholder="MessagePlaceholder"
                  value={values.message || ""}
                  onChange={handleChange}
                />
                <ValidationType type="message" />
              </Col>
              <S.ButtonContainer>
                <Button name="submit" type="submit">
                  {t("homePage.contact.form.submitBtn")}
                </Button>
              </S.ButtonContainer>
            </S.FormGroup>
          </Col>
        </Row>
      </S.Contact>
    </S.ContactContainer>
  );
};

export default withTranslation()(Contact);