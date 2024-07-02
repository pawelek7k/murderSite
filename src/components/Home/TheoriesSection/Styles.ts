import styled from "styled-components";

export const Section = styled.section`
    padding: 5rem 5rem 5rem 5rem;
`

export const HeadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: var(--spacing)
`

export const ContentContainer = styled.div`
    display: flex;
    gap: var(--spacing);

`

export const Headings = styled.h3`
    font-family: var(--secondary-font);
    font-size: 2.5rem;
    letter-spacing: 2px;
    margin-bottom: 1rem;
`
export const TextContainer = styled.div`
    padding: var(--spacing);
    width: 50%;
    line-height: 1.5;
    border-right: var(--border)
`

export const LinksContainer = styled.div`
padding: var(--spacing);
`

export const Icon = styled.img`
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
`

export const LinkWrapper = styled.div`
    display: flex;
    align-items: center;
`

export const Item = styled.li`
    display: flex;
    gap: var(--spacing);

`

export const List = styled.ul`
    display: flex;
    flex-direction: column;
    gap: var(--spacing);
`