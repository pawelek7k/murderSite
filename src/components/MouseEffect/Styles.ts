import styled from "styled-components";

export const Cards = styled.div`
    position: relative;
`

export const Card = styled.div`
  background-color: var(--background);
  border-radius: var(--secondary-border-radius);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3rem 1rem;

  &:hover::before {
    opacity: 1;
  }

  &::before,
  &::after {
    border-radius: inherit;
    content: "";
    height: 100%;
    left: 0px;
    opacity: 0;
    position: absolute;
    top: 0px;
    transition: opacity 500ms;
    width: 100%;
  }

  &::before {
    background: radial-gradient(
      500px circle at var(--mouse-x) var(--mouse-y),
      var(--shadow-modal),
      transparent 40%
    );
    z-index: 1;
  }

  &::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      var(--shadow-modal),
      transparent 40%
    );
    z-index: 1;
  }
`;

