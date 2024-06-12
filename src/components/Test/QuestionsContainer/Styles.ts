import styled from "styled-components";
import backgroundImage from '../../../images/test_bg.jpg';

export const QuestionsContStyles = styled.section`
    height: 100vh;
    padding: 8rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(0, 0, 0, 0.84) 100%), url(${backgroundImage});
  background-size: cover;
  background-position: center;
`