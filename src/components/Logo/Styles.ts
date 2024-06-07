import styled from 'styled-components';


export const StyledLogo = styled.h1`
font-family: var(--secondary-font);
font-weight: 500;
letter-spacing: 2px;
text-align: center;
span {
    color: var(--secondary);
    border-bottom: thin solid var(--secondary);
    background: linear-gradient(90deg, var(--accent), var(--primary));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

}

`
export const StyledCaption = styled.h2`
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