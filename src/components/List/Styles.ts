import { motion } from "framer-motion";
import styled from 'styled-components';

export const ListStyles = styled(motion.ul)`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  gap: 1.5rem;
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
