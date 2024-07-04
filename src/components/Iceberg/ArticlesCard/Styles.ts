import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: var(--spacing)
`

export const CardsList = styled.ul`
    display: flex;
    gap: var(--spacing);
    flex-direction: raw;
     @media (max-width: 600px) {
    flex-direction: column;
     }
`

export const CardContainer = styled.li`
    width: 300px;
    border: var(--border);
    border-radius: 2rem 0rem 2rem 0rem;
    padding: 1.5rem 1rem;
    cursor: pointer;
    transition: var(--transition);
    &:hover {
    background-color: var(--background-blur)
    }
    @media (max-width: 600px) {
    width: 100%;
     }
`