import styled from "styled-components";
import backgroundImage from '../../../images/test_bg.jpg';

export const QuestionsContStyles = styled.section`
    height: 100vh;
    padding: 8rem 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background: linear-gradient(to bottom, var(--background) 0%, var(--background) 20%, rgba(0, 0, 0, 0.84) 100%), url(${backgroundImage});
  background-size: cover;


`
export const Heading = styled.h3`
    font-family: var(--third-font);
    font-size: 1.5rem;
`

export const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`

export const AnswerBtn = styled.button`
  background-color: var(--background-blur);
  color: var(--text);
  line-height: 1.5;
  border: none;
  padding: .5rem;
  font-family: var(--third-font);
  transition: var(--transition);
  margin-bottom: 1rem;
  font-size: 1rem;
  border-radius: 2rem 0rem 2rem 0rem;

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
    color: var(--primary)
  }
`

export const CategoryText = styled.li<{ $isHighRisk: boolean }>`
color: ${(props) => (props.$isHighRisk ? 'red' : "inherit")};
font-weight:  ${(props) => (props.$isHighRisk ? 600 : "inherit")};
`;

export const ResultWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: var(--spacing);
  justify-content: center;
  align-items: center;
  margin-top: var(--spacing)
`