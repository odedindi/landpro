import styled from 'styled-components';
import { LandProButton } from '../../styles'

export const Button = styled(LandProButton)`
    background: transparent;
    color: ${ ({ theme }) => theme.colors.header };
    border: solid 0.125em ${ ({ theme }) => theme.colors.header };
    margin-top: 0.625rem;
    width: 100%;
    max-width: 180px; 

    &:hover {
        background: ${ ({ theme }) => theme.logo };
        color: white;
        border: solid 0.125em transparent;
    };
`;