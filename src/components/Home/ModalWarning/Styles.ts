import styled from "styled-components";

export const ModalWrapper = styled.div<{ $show?: boolean; }>`
    display: ${(props) => (props.$show ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: center;
    align-items: center;
    z-index: 999;
`;

export const ModalContent = styled.div`
    background-color: var(--text);
    padding: 2rem 3rem;
    border-radius: var(--spacing);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    color: var(--background);
    position: relative;
    overflow: hidden;
    text-align: center;
    width: 500px;
    background-color: var(--black);
  border-radius: inherit;
  display: flex;
  flex-direction: column;
  position: absolute;

`;

export const CloseButton = styled.button`
    position: absolute;
    background: transparent;
    top: 20px;
    color: white;
    right: 20px;
    border: none;
    font-size: 1.5rem;
    z-index: 888;
    cursor: pointer;
`;

export const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    z-index: 888;
    color: var(--text);
`

export const Line = styled.div`
    background: rgb(0,0,0);
    background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(76,75,2,1) 39%, rgba(74,73,13,1) 50%, rgba(69,67,1,1) 65%, rgba(0,0,0,1) 100%);
    width: 12rem;
    text-align: center;
    font-family: var(--secondary-font);
    height: 1.5rem;
    rotate: 40deg;
    position: absolute;
    top: 30px;
    right: -40px;
`

export const Card = styled.div`
  background-color: var(--background);
  border-radius: 10px;
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
      var(--primary-red),
      transparent 40%
    );
    z-index: 1;
  }

  &::after {
    background: radial-gradient(
      600px circle at var(--mouse-x) var(--mouse-y),
      var(--primary-red),
      transparent 40%
    );
    z-index: 1;
  }
`;

export const CardContent = styled.div`
  z-index: 999;
`
