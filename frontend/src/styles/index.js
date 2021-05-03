import styled from 'styled-components';

export const brandColor = '#E47D31';

export const LandProButton = styled.button `
    cursor: pointer;
    font-size: 1.25em;
    border: none;
    border-radius: 40px 40px 40px 40px;
    background-color: ${ brandColor };
    color: white;

    :hover{
        font-Weight: bolder;
    };
    :active {
        font-weight: normal;
        color: ${ brandColor };
        background-color: transparent;
        border: solid 0.0125em ${ brandColor };
    };
`;

export const SpinnerWrapper = styled.div `
  position: absolute;
  top: 50%;
  left: 50%;
  margin-top: -50px;
  margin-left: -50px;
`;
