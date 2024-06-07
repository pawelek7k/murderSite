import styled from "styled-components";
import Woman from "../../images/sunset.jpg";

export const StyledIntroduction = styled.section`
padding: 5rem 3rem;
background: radial-gradient(circle at center, rgba(0, 0, 0, 73%) 15%, var(--background) 25%),
    url(${Woman});
  background-position: center;
`

export const Wrapper = styled.div`

background: radial-gradient(circle at center, rgba(0, 0, 0, 73%) 50%, var(--background) 35%),
    url(${Woman});
  background-size: cover;
  background-position: center;
`