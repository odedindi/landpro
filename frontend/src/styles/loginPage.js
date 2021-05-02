import styled from 'styled-components';
import { Button } from 'grommet';
import { LandProButton } from './index'

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
    div {
        margin: 2em;
        width: 100%;
    };
    label {
        margin-right: 3em;
        font-weight: bold;
        font-family: "Roboto",serif;
    };
    p {
        color: red;
        text-align: center;
    };
`;
const LoginInput = styled.input `
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

export const FieldEmail = styled(LoginInput) `

`;
export const FieldPassword = styled(LoginInput) `
    margin-left: -1.5em;
`;

export const HideRevealButton = styled(Button) `
    /* border: solid 0.25px black; */
    height: 3em;
    position:relative;
    top: 0.35em;
    justify-self: center;
`;

export const LoginButton = styled(LandProButton) `
    width: 100%;
    height: 3.5em;
    margin: 1.5em 0 1.5em 0;
`;