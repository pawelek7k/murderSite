import { motion } from "framer-motion";
import styled from 'styled-components';

export const ListStyles = styled(motion.ul)`
  display: flex;
  margin-top: 2rem;
  gap: 1.5rem;
  font-weight: 600;

  li {
    font-size: 1.3rem;
    color: var(--secondary);
    z-index: 2;

    .first-word {
      -webkit-text-fill-color: var(--pure-white);
      background: linear-gradient(90deg, var(--primary), var(--primary));
      -webkit-background-clip: text;
      font-family: var(--secondary-font);
      letter-spacing: 2px;
      font-size: 1.7rem;
    }
  }
`;
