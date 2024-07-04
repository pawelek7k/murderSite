import styled from "styled-components";
import backgroundImage from '../../images/news.jpg';

export const DetailsContainer = styled.div`
    padding: 8rem 3rem;
    background: radial-gradient(circle at center, rgba(0, 0, 0, 73%) 10%, var(--background) 35%),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

export const VictimsList = styled.ul`
    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding-left: var(--spacing)
`

export const Victims = styled.li`
    list-style: unset;
`
export const DataWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    color: var(--primary)
`
