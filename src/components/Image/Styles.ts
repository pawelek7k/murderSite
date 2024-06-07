import styled from 'styled-components';


export const StyledImage = styled.img<{ $res?: boolean; }>`
 -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
@media screen and (max-width: 600px) {
display: ${props => props.$res ? 'none' : 'block'}
}
}
`