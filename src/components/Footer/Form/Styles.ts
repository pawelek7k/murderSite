import styled from 'styled-components';



export const FormStyles = styled.form`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
`;

export const Group = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  color: rgb(99, 102, 102);
  position: absolute;
  top: -10px;
  left: 10px;
  background-color: #fff;
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
  &:placeholder-shown + ${Label} {
    top: 10px;
    background-color: transparent;
  }
  &:focus {
    border-color: #3366cc;
  }
  &:focus + ${Label} {
    top: -10px;
    left: 10px;
    background-color: #fff;
    color: #3366cc;
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
  resize: none;
  height: 100px;
  &:placeholder-shown + ${Label} {
    top: 10px;
    background-color: transparent;
  }
  &:focus {
    border-color: #3366cc;
  }
  &:focus + ${Label} {
    top: -10px;
    left: 10px;
    background-color: #fff;
    color: #3366cc;
    font-weight: 600;
    font-size: 14px;
  }
`;