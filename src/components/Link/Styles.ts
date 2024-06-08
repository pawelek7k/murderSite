import styled from "styled-components";

export const StyledLink = styled.a`
    background: linear-gradient(to right, var(--primary-red), var(--text));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  transition: var(--transition);

  &:hover {
  background: linear-gradient(to right, var(--primary-red), var(--primary));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  }
`