import { useState } from "react";
import { Button } from "../../../../Button";
import { Input, InputField, Label, StyledForm } from "./StyledForm";

export const Form = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  return (
    <StyledForm>
      <InputField>
        <Input
          type="text"
          id="input"
          required
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value !== "");
          }}
        />
        <Label htmlFor="input" isFocused={isFocused} hasValue={hasValue}>
          Enter your email
        </Label>
      </InputField>
      <Button content={"Subscribe!"} bg={true} />
    </StyledForm>
  );
};
