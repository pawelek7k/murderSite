import styled from "styled-components";

export const StyledParallax = styled.div`
overflow: hidden;
  letter-spacing: -2px;
  line-height: 0.8;
  margin: 0;
  white-space: nowrap;
  display: flex;
  font-family: var(--secondary-font);
  flex-wrap: nowrap;

  .scroller {
  font-weight: 600;
  text-transform: uppercase;
  font-size: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .8rem;
  white-space: nowrap;
  display: flex;
  flex-wrap: nowrap;
 background: rgb(0,0,0);
background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(76,75,2,1) 39%, rgba(74,73,13,1) 50%, rgba(69,67,1,1) 65%, rgba(0,0,0,1) 100%);
}

 span {
  display: block;
  margin-right: 30px;
  color: black;
  letter-spacing: 1px;
}

`