import styled from 'styled-components';

export const StyledSlider = styled.div`

.swiper {
  padding: 50px 100px;
}


.swiper-slide {
  background-position: center;
  background-size: cover;
  @media (max-width: 1000px) {
  width: 300px !important;
}
}


p {
    letter-spacing: 1px;
    font-family: var(--third-font);
     @media (max-width: 600px) {
    font-size: .9rem;
    }
}

`;
