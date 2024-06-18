import { nanoid } from "nanoid";
import { useState } from "react";
import { Button } from "../../../../Button";
import { Input, InputField, Label, StyledForm } from "./StyledForm";

export const Form = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const nanoId = nanoid();
  return (
    <StyledForm>
      <InputField>
        <Input
          type="email"
          id={nanoId}
          required
          onFocus={() => setIsFocused(true)}
          onBlur={(e) => {
            setIsFocused(false);
            setHasValue(e.target.value !== "");
          }}
        />
        <Label htmlFor={nanoId} $isFocused={isFocused} $hasValue={hasValue}>
          Enter your email
        </Label>
      </InputField>
      <Button content={"Subscribe!"} bg={false} />
    </StyledForm>
  );
};
