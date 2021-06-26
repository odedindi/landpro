// ======================== react =========================
import React from 'react';
// ======================== styles ========================
import { Row, Col } from 'antd';
import * as S from '../styles';
// ========================= icons ========================
import notes from '../../../../assets/imgs/svg/notes.svg'
// ========================================================

const SectionCard = ({ content, span, title,  }) => {

    return (
        <Col span={ span }>
            <Row justify="start" align='bottom'>
                <img src={ notes } alt='notes icon' width="30px"/>
                <S.MinTitle>{ title }</S.MinTitle>
            </Row>
            <S.MinPara>{ content }</S.MinPara>
        </Col>
    );
};

export default SectionCard;
