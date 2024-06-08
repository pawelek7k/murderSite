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
    max-width: 400px;
    overflow: hidden;
    text-align: center;

`;

export const CloseButton = styled.button`
    position: absolute;
    background: transparent;
    top: 20px;
    right: 20px;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
`;

export const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    background: linear-gradient(to right, var(--background), var(--primary-yellow));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
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