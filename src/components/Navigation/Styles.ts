import styled from 'styled-components';


export const StyledNavigation = styled.div`
display: flex;
align-items: center;
justify-content: center;
gap: var(--spacing);
background-color: var(--background-blur);
backdrop-filter: var(--blur);
border: var(--border);
position: fixed;
bottom: 1rem;
left: 50%;
transform: translateX(-50%);
border-radius: var(--border-radius);
padding: 1rem 4rem;
z-index: 999;

.active {
    color: var(--primary);
}

@media screen and (max-width: 600px) {
padding: 1rem 0rem;
width: 100%;
bottom: 0;
left: 0;
transform: translateX(0);
border-radius: 0rem;
border: none;
border-top: var(--border);
}
`
export const ListNavigation = styled.ul`
display: flex;
gap: var(--spacing);
font-family: var(--secondary-font);
font-size: 1.5rem;
letter-spacing: 1px;
a {
color: var(--text);
transition: var(--transition);
&:hover {
color: var(--primary)
}
}
`