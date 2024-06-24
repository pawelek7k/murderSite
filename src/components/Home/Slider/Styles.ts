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

h3 {
    font-family: var(--secondary-font);
    letter-spacing: 2px;
    font-size: 1.5rem;
    color: var(--primary);
}

p {
    letter-spacing: 1px;
    font-family: var(--third-font);
     @media (max-width: 600px) {
    font-size: .9rem;
    }
}

`;
