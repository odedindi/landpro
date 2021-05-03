import styled from 'styled-components';
import { LandProButton } from '.';


export const NavBarWrapper = styled.div `
    display: flex;
    flex-direction: row;
    justify-self: center;
    justify-content: space-between;
    width: 98vw;
    height: 3em;
    background-color: lightgray;
    margin: auto;
    padding: auto;
`;

export const Title = styled.h3 `
    letter-spacing: 0.125em;
    margin: 0.35em 0 0 3em;
`;

export const MenuWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2.5em;
    background-color: lightgray;
    width: 15em;
    height: 100%;
`;

export const NavBarButton = styled(LandProButton) `
    height: 1.5em;
    align-self: center;
    margin-right: 2em;
`;

export const MenuOptionButton = styled(LandProButton) `
    height: 5em;
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: black;
    :focus {
        border: none;
    };
`;
