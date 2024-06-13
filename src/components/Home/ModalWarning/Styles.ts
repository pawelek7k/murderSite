import styled from "styled-components";
import backgroundImage from '../../../images/modal_bg.jpg';

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
    padding: 2rem;
    border-radius: var(--spacing);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    background: linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(0, 0, 0, 0.64) 100%), url(${backgroundImage});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    width: 500px;
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
    gap: 1rem;
    z-index: 888;
    color: var(--text);
`

export const Card = styled.div`
  background-color: var(--background);
  border-radius: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 3rem 1rem;
   background: linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(0, 0, 0, 0.64) 100%), url(${backgroundImage});
  background-size: cover;
  background-position: center;

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

export const CardContent = styled.div`
  z-index: 999;
`
