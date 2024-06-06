import styled from 'styled-components';
import backgroundImage from '../../images/hero_bg.jpg';


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
 position: absolute;
 bottom: 20%;
 right: 5%;
`

export const Section = styled.section`
height: 100vh;
padding-top: 9rem;
position: relative;
  -webkit-user-select: none; /* Safari /
  -ms-user-select: none; / IE 10 and IE 11 /
  user-select: none; / Standard syntax */
`

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  background: radial-gradient(circle at center, rgba(0, 0, 0, 73%) 20%, var(--background) 40%),
    url(${backgroundImage});
  background-size: cover;
  background-position: center;
`;