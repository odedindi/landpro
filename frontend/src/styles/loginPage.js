import styled from 'styled-components';
import { brandColor, LandProButton } from './index'

export const LoginWrapper = styled.div `
    display: flex;
    flex-direction: column;
    justify-self: center;
    align-items: center;
    width: 55vw;
    margin: 5em 0 0 22.5vw;

    h1 {
        text-align: center;
    };
    p {
        color: red;
        text-align: center;
    };
`;
export const InputWrapper = styled.div `
    margin: 2em;
    width: 100%;

    label {
        margin-right: 3em;
        font-weight: bold;
        font-family: "Roboto",serif;
    };
`
export const FieldEmail = styled.input `
    padding: .5em;
    border: none;
    border-bottom: solid 1px black;
    background: transparent;
    font-family: "Roboto",serif;
    width: 15em;

    :focus {
        outline:none !important;
    };
`;
export const FieldPassword = styled(FieldEmail) `
    margin-left: -1.5em;
`;

export const HideRevealButton = styled.div `
    height: 3em;
    position:relative;
    bottom: 3.75em;
    left: 17.5em;
    justify-self: center;
    padding-top: 0.25em;
    background-color: transparent;

    :hover {
        cursor: pointer;
    }
`;

export const LoginButton = styled(LandProButton) `
    width: 100%;
    height: 3.5em;
    margin: 1.5em 0 1.5em 0;
`;
