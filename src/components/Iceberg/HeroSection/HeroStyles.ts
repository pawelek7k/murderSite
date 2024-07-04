import styled from "styled-components";
import backgroundImage from '../../../images/news.jpg';

export const HeroStyles = styled.section`
    padding:8rem 5rem;
    min-height: 100vh;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 73%) 10%, var(--background) 35%),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;

`