import styled from 'styled-components';


export const StyledHeader = styled.header<{ $show?: boolean }>`
  display: flex;
  justify-content: center;
  background-color: var(--background-blur);
  backdrop-filter: blur(5px);
  align-items: center;
  padding: ${(props) => (props.$show ? "3rem .5rem .5rem .5rem" : ".5rem")};
  position: fixed;
  width: 100%;
  z-index: 999;
  border-bottom: var(--border);
  top: 0;
`;
