import styled from 'styled-components';
import { LandProButton } from '../../styles';


const maxWidth = '1024px';

export const NavBarWrapper = styled.header `
    display: flex;
    flex-direction: row;
    justify-self: center;
    justify-content: space-between;
    height: 5rem;
    background-color: ${ ({theme}) => theme.colors.background };
    margin: auto;
    padding: auto;
`;

export const LogoContainer = styled.a`
    display: flex;
    padding: 1.0125rem 0 0 2rem;
    width: 20rem;
    img {
        height: 3.25rem;
    };
    h3 {
        color: ${ ({ theme }) => theme.logo };
        letter-spacing: 0.215rem;
        margin: 0.35rem -0.253rem;
    };
`;

export const LargeScreenWrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 60rem;
    justify-content: space-between;
    @media only screen and (max-width: ${ maxWidth }) {
        display: none;
    };
`;
export const DrawerMenuWrapper = styled.div `
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 2.5rem;
    width: 15rem;
`;

export const MenuOptionButton = styled(LandProButton) `
    height: 5rem;
    width: 100%;
    background-color: transparent;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${ ({ theme }) => theme.colors.header };
    &:focus {
        border: none;
    };

    &:hover {
        color: ${ ({ theme }) => theme.logo };     
    };
    @media only screen and (max-width: ${ maxWidth }) {
        justify-content: space-between;
    };
`;
export const SelectWrapper = styled.div `
    height: 5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    color: ${ ({ theme }) => theme.colors.header };
    
    select {
        border: none;
        background-color: transparent;
        cursor: pointer;
        font-size: 1.25em;
        transition: ease-in-out 0.25s;
    };

    @media only screen and (max-width: ${ maxWidth }) {
        justify-content: space-between;
        flex-direction: row-reverse;
    };
`;

export const MenuTitle = styled.h6 `
    letter-spacing: 0.125rem;
    margin: -.5rem 0 0 1.55rem;
    color: ${ ({ theme }) => theme.colors.header };
`;

export const NavBarMenuButton = styled(LandProButton) `
    align-self: center;
    margin-right: 2rem;
    background-color: transparent;
    color: ${ ({ theme }) => theme.colors.header };
    &:focus, &:active {
        border: none;
    };
    &:hover {
        color: ${ ({ theme }) => theme.brand };
    };

    display: none;
    @media only screen and (max-width: ${ maxWidth }) {
        display: block !important;
    };

`;
