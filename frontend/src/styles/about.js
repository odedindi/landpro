import styled from 'styled-components';
import { brandColor } from '.';


export const AboutPageWrapper = styled.div `
    display: flex;
    flex-direction: column;
    padding: 5em;

    a {
        font-weight: bold;
        color: black;
        :hover {
            color: ${ brandColor };
        };
    };
`;
export const AboutTabs = styled.div `
    align-self: center;
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    align-content: space-between;
    min-width: 17.5vw;
    height: 5em;
    margin-bottom: 1.5em;
`;
export const AboutTab = styled.div `
    cursor: pointer;
    font-size: 1.25em;
    border: none;
    border-radius: 40px 40px 40px 40px;
    color: black;
    background-color: white;
    margin: 0 1em 0 1em;

    :hover{
        color: ${ brandColor };
    };
    .showSpan {
        font-weight: bold;
        border-bottom: solid 1px ${ brandColor };
    }
`;

export const HDIW = styled.div `
    display: flex;
    flex-flow: row wrap;
    justify-content: center;

`;
