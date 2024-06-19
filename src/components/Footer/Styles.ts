import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: var(--background);
    border-top: var(--border);
    padding: 4rem 4rem 10rem 4rem;
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
    position: relative;
    @media (max-width: 650px) {
    padding: 4rem 0rem 8rem 0rem;

    }

`
