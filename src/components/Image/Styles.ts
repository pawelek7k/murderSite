import styled from 'styled-components';


export const StyledImage = styled.img<{ $res?: boolean; }>`
@media screen and (max-width: 600px) {
display: ${props => props.$res ? 'none' : 'block'}
}
}
`