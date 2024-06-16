import styled from 'styled-components';

interface LabelProps {
  $isFocused: boolean;
  $hasValue: boolean;
}

export const StyledForm = styled.form`
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
  border: 1.5px solid var(--primary);
  background: transparent;
  padding-left: 10px;
  color: var(--accent);
  font-family: var(--third-font);

  &:focus {
    border: 1.5px solid var(--accent);
  }
`;

export const Label = styled.label<LabelProps>`
  position: absolute;
  top: ${props => (props.$isFocused || props.$hasValue ? '10px' : '50%')};
  left: ${props => (props.$isFocused || props.$hasValue ? '10px' : '15px')};
  color: ${props => (props.$isFocused || props.$hasValue ? 'var(--accent)' : 'var(--primary)')};
  font-size: ${props => (props.$isFocused || props.$hasValue ? '12px' : '16px')};
  background-color: ${props => (props.$isFocused || props.$hasValue ? 'var(--background)' : 'transparent')};
  padding-left: ${props => (props.$isFocused || props.$hasValue ? '10px' : '0')};
  padding-right: ${props => (props.$isFocused || props.$hasValue ? '10px' : '0')};
  transition: all 0.3s ease;
  pointer - events: none;
  z-index: 2;
`;

