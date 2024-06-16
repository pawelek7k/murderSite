import styled from 'styled-components';

interface LabelProps {
  isFocused: boolean;
  hasValue: boolean;
}

export const StyledForm = styled.form`
   margin: 20px;
  background-color: var(--background-blur);
  backdrop-filter: var(--blur);
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  width: 400px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 25px;
  border-radius: 8px;
`;


export const InputField = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  margin-top: 15px;
  width: 100%;
  outline: none;
  border-radius: 8px;
  height: 45px;
  border: 1.5px solid #ecedec;
  background: transparent;
  padding-left: 10px;

  &:focus {
    border: 1.5px solid #2d79f3;
  }
`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${props => (props.isFocused || props.hasValue ? '5px' : '25px')};
  left: ${props => (props.isFocused || props.hasValue ? '5px' : '15px')};
  color: ${props => (props.isFocused || props.hasValue ? '#2d79f3' : '#ccc')};
  font-size: ${props => (props.isFocused || props.hasValue ? '12px' : '16px')};
  background-color: ${props => (props.isFocused || props.hasValue ? '#ffffff' : 'transparent')};
  padding-left: ${props => (props.isFocused || props.hasValue ? '5px' : '0')};
  padding-right: ${props => (props.isFocused || props.hasValue ? '5px' : '0')};
  transition: all 0.3s ease;
  pointer-events: none;
  z-index: 2;
`;

