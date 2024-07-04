import { nanoid } from "nanoid";
import { useState } from "react";
import {
  Input,
  InputField,
  Label,
} from "../../Home/Newsletter/Modal/Form/StyledForm";
import { InputContainer } from "./Styles";

export const InputComponent = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hasSearchValue, setHasSearchValue] = useState(false);
  const searchId = nanoid();

  return (
    <InputContainer>
      <InputField>
        <Input
          type="text"
          id={searchId}
          required
          onFocus={() => setIsSearchFocused(true)}
          onBlur={(e: { target: { value: string } }) => {
            setIsSearchFocused(false);
            setHasSearchValue(e.target.value !== "");
          }}
        />
        <Label
          htmlFor={searchId}
          $isFocused={isSearchFocused}
          $hasValue={hasSearchValue}
        >
          Search articles
        </Label>
      </InputField>
    </InputContainer>
  );
};
