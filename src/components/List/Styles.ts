import styled from 'styled-components';

export const ListStyles = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1.5rem;
  padding: 3rem;
  border-radius: var(--border-radius);
  border: var(--border);

  li {
    font-size: 1.3rem;
    color: var(--primary);
    z-index: 2;

    .first-word {
      color: var(--text);
      font-family: var(--secondary-font);
      letter-spacing: 2px;
      font-size: 1.7rem;
    }
  }
`;
