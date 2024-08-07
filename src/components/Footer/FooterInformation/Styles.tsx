import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media (max-width: 650px) {
    flex-direction: column;
    gap: 2rem;
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  gap: var(--spacing);
  svg {
    width: 30px;
    height: 30px;
    color: var(--primary);
    transition: var(--transition);
    &:hover {
      color: var(--accent);
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const SocialWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CopyRightWrapper = styled.div`
  position: absolute;
  bottom: 7rem;
  font-size: 0.8rem;
`;
