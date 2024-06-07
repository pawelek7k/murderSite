import styled from 'styled-components';


export const StyledHeading = styled.h2<{ visually?: boolean }>`
text-align: center;
font-family: var(--secondary-font);
font-size: 3.5rem;
letter-spacing: 1px;
visibility: ${props => (props.visually ? "visible" : "hidden")};
`
