import styled from 'styled-components';
import { LandProButton } from '.';


export const NavBarWrapper = styled.div `
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 0.5em 1.5em 0.5em 1.5em;
width: 100%;
height: 3em;
background-color: lightgray;
`;

export const Title = styled.h3 `
    letter-spacing: 0.125em;
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

export const NavBarButton = styled(LandProButton) ``;

export const MenuOptionButton = styled(NavBarButton) `
height: 5em;
width: 100%;
background-color: transparent;
display: flex;
flex-direction: row;
justify-content: space-between;
color: black;
`;
