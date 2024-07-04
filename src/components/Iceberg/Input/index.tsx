import { nanoid } from "nanoid";
import { useState } from "react";
import {
  Input,
  InputField,
  Label,
} from "../../Home/Newsletter/Modal/Form/StyledForm";
import { InputContainer } from "./Styles";

interface InputProps {
  onSearch: (searchTerm: string) => void;
}

export const InputComponent = ({ onSearch }: InputProps) => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [hasSearchValue, setHasSearchValue] = useState(false);
  const searchId = nanoid();

  const handleBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsSearchFocused(false);
    setHasSearchValue(e.target.value !== "");
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;
    if (onSearch) {
      onSearch(searchTerm);
    }
    setHasSearchValue(searchTerm !== "");
  };

  return (
    <InputContainer>
      <InputField>
        <Input
          type="text"
          id={searchId}
          required
          onFocus={() => setIsSearchFocused(true)}
          onBlur={handleBlur}
          onChange={handleChange}
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
