import styled from 'styled-components';


export const Footer = styled.footer`
  background: rgb(245, 245, 245);
  padding: 2.5rem 10rem 0 2.5rem;
`;

export const Row = styled.div `
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

`
export const Title = styled.h4`
  font-size: 16px;
  text-transform: uppercase;
  color: #000;

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const Paragraph = styled.div`
  color: rgba(2, 7, 62, 0.8);
  max-width: 340px;
  font-size: 14px;
  width: 100%;
  text-align: ${(props) => (props.left ? 'left' : '')};
  padding: ${(props) => (props.left ? '0 10%' : '')};
`;

export const NavLink = styled.a`
  display: block;
  font-size: 1rem;
  margin-bottom: 0.625rem;
  transition: all 0.2s ease-in-out;
  &:hover,
  &:active,
  &:focus {
    color: #15418e;
  }
`;


export const FooterLink = styled.a `
  display: block;
  font-size: .875rem;
  color: rgba(2, 7, 62, 0.8);
  margin-bottom: 0.625rem;
  max-width: 340px;
  width: 100%;
  transition: all 0.25s ease-in-out;

  &:hover, &:active, &:focus {
    color: #15418e;
  };
`

export const Extra = styled.section`
  background: rgb(245, 245, 245);
  position: relative;
  padding: 3rem 0;
`;

export const LogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 1rem;

  p {
    text-align: center;
    font-weight: bold;
  }
`;



export const FooterContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 3rem 0 3rem;
`;



export const SelectLanguageWrapper = styled.div`
  line-height: 24px;
  align-content: center;

  select {
    cursor: pointer;
    border: none;
    font-size: 1.125rem;
    background: transparent;
  };

  @media only screen and (min-width: 1024px) {
    padding: 0 10%;
  };
`;

export const ContactName = styled.p`
  text-align: center;
  color: rgba(2, 7, 62, 0.8);
  width: 100%;
  margin-top: 1rem;
  border-bottom: 1.5px solid rgba(225, 115, 82, 0.8);
  
`;
export const SocialLink = styled.div `
  :hover {
    filter: opacity(0.25) drop-shadow(0 0 0 orange);
    color: rgb(255, 130, 92);
  }
`