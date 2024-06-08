import styled from 'styled-components';
import backgroundImage from '../../../images/hero_bg.jpg';


export const StyledWrapperLink = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
export const StyledWrapperLogos = styled.div<{ $res?: boolean }>`
display: flex;
justify-content: space-between;
padding: 0 1rem;
@media screen and (max-width: 600px) {
display: ${props => props.$res ? 'none' : 'block'}
}

`

export const HeadingWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: flex-end;
height: 60%;
justify-content: flex-end;
`

export const Section = styled.section`
padding: 8rem 3rem;
position: relative;
  -webkit-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 100%;
  height: 100vh;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 73%) 10%, var(--background) 35%),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
`
