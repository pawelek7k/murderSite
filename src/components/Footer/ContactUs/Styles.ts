import styled from "styled-components"
import backgroundImage from '../../../images/bloodbath-891262_1280.jpg'

export const ContactContainer = styled.div`
    width: 100%;
    background-color: var(--primary-red);
    border-radius: var(--secondary-border-radius);
    background: linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(0, 0, 0, 0.84) 100%), url(${backgroundImage});
  background-size: cover;
  background-position: center;
`

export const HeadingWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 30%;
    gap: 2rem;
    @media (max-width: 800px) {
    width: 100%;
    align-items: center;
}
`

export const FormWrapper = styled.div`
    z-index: 3;
`

export const Wrapper = styled.div`
display: flex;
justify-content: space-around;
flex-direction: row;
@media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`