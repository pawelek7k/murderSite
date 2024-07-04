import styled from 'styled-components';

export const Heading = styled.h2<{ $visually?: boolean }>`
  text-align: center;
  font-family: var(--secondary-font);
  font-size: 3.5rem;
  letter-spacing: 1px;
  visibility: ${props => (props.$visually ? "visible" : "hidden")};
  @media (max-width: 600px) {
  font-size: 2.5rem;
}
`;
