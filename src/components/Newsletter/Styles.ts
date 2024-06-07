import styled from "styled-components";
import backgroundImage from '../../images/news.jpg';

export const Section = styled.section`
  background: linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(0, 0, 0, 0.84) 100%), url(${backgroundImage});

  background-size: cover;
  background-position: center;
  height: 600px;
  padding: 2rem;
`