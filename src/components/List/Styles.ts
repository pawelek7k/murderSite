import styled from 'styled-components';

export const ListStyles = styled.ul`
  display: flex;
  gap: 2rem;
  padding: 3rem;
  justify-content: center;

  li {
    font-size: 1.3rem;
    display: flex;
    flex-direction: column;
    color: var(--primary);
    z-index: 2;
    position: relative;
    padding-left: 2rem;
    font-family: var(--third-font);

    &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 1px;
    background-color: var(--accent);
    }

    &:first-child::after {
    content: none;
}

    .first-word {
      color: var(--text);
      font-family: var(--secondary-font);
      letter-spacing: 2px;
      font-size: 1.7rem;
    }
  }
`;
