import styled from "styled-components";

export const StyledButton = styled.button<{ $bg?: boolean }>`
  padding: 1rem 2.5rem;
  font-size: 1.2rem;
  font-family: var(--secondary-font);
  letter-spacing: 2px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  z-index: 1;
  cursor: pointer;

  &::after,
  &::before {
     content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: -99999;
  transition: all .4s;
  }

  &::before {
    transform: translate(0%, 0%);
  width: 100%;
  height: 100%;
  background: ${props => (props.$bg ? '#2d0108' : '#070507d3')};
  border-radius: 10px;
  }

  &::after {
    transform: translate(10px, 10px);
  width: 35px;
  height: 35px;
  background: #ffffff15;
  backdrop-filter: blur(5px);
  border-radius: 50px;
  }

  &:hover::before {
   transform: translate(5%, 20%);
  width: 110%;
  height: 110%;
  }

  &:hover:after {
  border-radius: 10px;
  transform: translate(0, 0);
  width: 100%;
  height: 100%;
  }

  &:active::after {
  transition: 0s;
  transform: translate(0, 5%);
  }
`