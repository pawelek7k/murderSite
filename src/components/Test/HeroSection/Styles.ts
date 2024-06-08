import styled from "styled-components";
import backgroundImage from '../../../images/horror_bg.jpg';

export const Section = styled.section`
padding: 8rem 3rem;
position: relative;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 73%) 5%, var(--background) 50%),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
`
