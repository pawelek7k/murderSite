import { nanoid } from "nanoid";
import { useState } from "react";
import { Button } from "../../Button";
import {
  Input,
  InputField,
  Label,
  StyledForm,
  TextArea,
} from "../../Home/Newsletter/Modal/Form/StyledForm";

export const Form = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [hasNameValue, setHasNameValue] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [hasEmailValue, setHasEmailValue] = useState(false);
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [hasTextAreaValue, setHasTextAreaValue] = useState(false);

  const textAreaId = nanoid();
  const emailId = nanoid();
  const nameId = nanoid();

  return (
    <StyledForm>
      <InputField>
        <Input
          type="text"
          id={nameId}
          required
          onFocus={() => setIsNameFocused(true)}
          onBlur={(e) => {
            setIsNameFocused(false);
            setHasNameValue(e.target.value !== "");
          }}
        />
        <Label
          htmlFor={nameId}
          $isFocused={isNameFocused}
          $hasValue={hasNameValue}
        >
          Enter your name
        </Label>
      </InputField>
      <InputField>
        <Input
          type="email"
          id={emailId}
          required
          onFocus={() => setIsEmailFocused(true)}
          onBlur={(e) => {
            setIsEmailFocused(false);
            setHasEmailValue(e.target.value !== "");
          }}
        />
        <Label
          htmlFor={emailId}
          $isFocused={isEmailFocused}
          $hasValue={hasEmailValue}
        >
          Enter your email
        </Label>
      </InputField>
      <InputField>
        <TextArea
          required
          id={textAreaId}
          name="textarea"
          onFocus={() => setIsTextAreaFocused(true)}
          onBlur={(e) => {
            setIsTextAreaFocused(false);
            setHasTextAreaValue(e.target.value.trim() !== "");
          }}
        />
        <Label
          htmlFor={textAreaId}
          $isFocused={isTextAreaFocused}
          $hasValue={hasTextAreaValue}
        >
          How can we help you??
        </Label>
      </InputField>
      <Button content={"Submit"} bg={true} />
    </StyledForm>
  );
};
