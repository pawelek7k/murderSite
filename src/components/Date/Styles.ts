import styled from "styled-components";

export const Container = styled.div<{ $res?: boolean; }>`
   font-weight: 600;
    color: var(--primary);
    @media screen and (max-width: 600px) {
display: ${props => props.$res ? 'none' : 'block'}
}
`