import styled from 'styled-components';


export const StyledLogo = styled.h1<{ $positionOnPage?: boolean; }>`
font-family: var(--secondary-font);
font-weight: 500;
font-size: ${props => (props.$positionOnPage ? '2rem' : '3rem')};
letter-spacing: 2px;
text-align:  ${props => (props.$positionOnPage ? 'center' : 'start')};
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
span {
    color: var(--secondary);
    border-bottom: thin solid var(--secondary);
    background: linear-gradient(90deg, var(--accent), var(--primary-red));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

`
export const StyledCaption = styled.h2`
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
    font-family: var(--third-font);
    font-size: 1.2rem;
    color: var(--secondary-text);
    background: linear-gradient(90deg, var(--text), var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    `

export const LogoWrapper = styled.div`
display: flex;
flex-direction: column;
`