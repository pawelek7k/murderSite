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
    border-radius: var(--secondary-border-radius);
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    position: relative;
    background: linear-gradient(to bottom, var(--background) 0%, var(--background) 50%, rgba(0, 0, 0, 0.64) 100%), url(${backgroundImage});
    background-size: cover;
    background-position: center;
    overflow: hidden;
    width: 500px;
    @media (max-width: 600px) {
    width: 100%;
    }
`;

export const CloseButton = styled.button`
    position: absolute;
    background: transparent;
    top: 10px;
    color: white;
    right: 10px;
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

