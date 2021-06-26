import styled, { css } from 'styled-components';

const width = '21.5rem', height='34.5rem';

export const Container = styled.div`
    position: relative;
    overflow: hidden;
    width: ${ width };
    color: rgba(0, 2, 46, 0.75);
    @media only screen and (max-width: 768px) {
        width: 20rem;
    }
`;
export const Children  = styled.div`
    width: ${ width };
    height: ${ height };
`;
export const Arrow = styled.div`
    text-shadow: 2.5px 2.5px 2.5px #cfcfcf;
    z-index: 100;
    line-height: ${ height };
    text-align: center;
    position: absolute;
    top: 0;
    width: 10%;
    font-size: 3em;
    cursor: pointer;
    user-select: none;
    ${ props => props.right ? css`left: 90%;` : css`left: 0%;` }
`;
export const Dot = styled.span`
    font-size: 1.5em;
    cursor: pointer;
    text-shadow: 1px 1px 1px #fff;
    user-select: none;
`;
export const Dots = styled.span`
    text-align: center;
    width: ${ width };
    z-index: 100;
`;