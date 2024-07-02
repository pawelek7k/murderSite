import styled from "styled-components";
import Woman from "../../../images/modal_bg.jpg";

export const StyledIntroduction = styled.section`
padding: 15rem 3rem 10rem 3rem;
 @media (max-width: 900px) {
    padding: 10rem .5rem 5rem .5rem;
  }
background: radial-gradient(circle at center, rgba(0, 0, 0, 73%) 15%, var(--background) 25%),
    url(${Woman});
  background-position: center;
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-between;
@media (max-width: 600px) {
justify-content: center;
}
`