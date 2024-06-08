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