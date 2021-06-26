import styled from 'styled-components';

export const brandColor = '#E47D31';

export const LandProButton = styled.button `
    cursor: pointer;
    font-size: 1.125em;
    border: solid 0.125em transparent;
    border-radius: 20px 20px 20px 20px;
    background-color: ${ ({ theme }) => theme.logo };
    color: white;
    transition: ease-in-out 0.3s;
    font-weight: 700;
    height: 50px;   
    :hover {
        color: ${ ({ theme }) => theme.colors.header };
        background-color: transparent;
    };
`;

export const SpinnerWrapper = styled.div `
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -50px;
    margin-left: -50px;
    h2 {
        color: ${({ theme }) => theme.logo};
    }
`;
