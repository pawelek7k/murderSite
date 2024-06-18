import styled from 'styled-components';



export const FormStyles = styled.form`
  margin-top: 20px;
    width: 400px;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Label = styled.label`
  font-size: 14px;
  color: var(--primary);
  padding: 0rem .5rem;
  height: 0rem;
  position: absolute;
  top: 50%;
  left: 10px;
  background-color: var(--primary-red);
  transition: all 0.3s ease;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  color: var(--primary);
  background-color: transparent;
  &:placeholder-shown + ${Label} {
    top: 0;
    background-color: transparent;
  }
  &:focus {
    border-color: var(--accent);
  }
  &:focus + ${Label} {
    top: -18px;
    left: 10px;
    background-color: var(--primary-red);
    color: var(--accent);
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid var(--primary);
  margin-bottom: 20px;
  outline: 0;
  width: 100%;
  background-color: transparent;
  resize: none;
  height: 100px;
  &:placeholder-shown + ${Label} {
    top: 0;
    background-color: transparent;
  }
  &:focus {
    border-color: var(--accent);
  }
  &:focus + ${Label} {
    top: -18px;
    left: 10px;
    background-color: var(--primary-red);
    color: var(--accent);
    font-weight: 600;
    font-size: 14px;
  }
`;