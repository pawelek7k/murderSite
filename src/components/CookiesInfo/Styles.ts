import styled from "styled-components";

export const Container = styled.div<{ $show?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999;
  width: 100%;
  height: 2rem;
  display: ${(props) => (props.$show ? "flex" : "none")};
  justify-content: space-between;
  align-items: center;
  padding: .5rem 2rem;
  flex-direction: row;
  @media (max-width: 1000px) {
  flex-direction: column;
  gap: .5rem;
  }
`;
export const Button = styled.span`
    color: var(--text);
  transition: var(--transition);
    cursor: pointer;
    font-family: var(--secondary-font);
    letter-spacing: 2px;
  &:hover {
    transform: translateY(-3px);
  }
`