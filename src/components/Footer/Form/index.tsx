import axios from "axios";
import { nanoid } from "nanoid";
import { FormEvent, useState } from "react";
import { Button } from "../../Button";
import {
  Input,
  InputField,
  Label,
  StyledForm,
  TextArea,
} from "../../Home/Newsletter/Modal/Form/StyledForm";
import { ResponseWrapper } from "./Styles";

export const Form = () => {
  const [isNameFocused, setIsNameFocused] = useState(false);
  const [hasNameValue, setHasNameValue] = useState(false);
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [hasEmailValue, setHasEmailValue] = useState(false);
  const [isTextAreaFocused, setIsTextAreaFocused] = useState(false);
  const [hasTextAreaValue, setHasTextAreaValue] = useState(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [response, setResponse] = useState<string>("");

  const textAreaId = nanoid();
  const emailId = nanoid();
  const nameId = nanoid();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("/send-email", { name, email, message });
      setResponse(res.data.message);
    } catch {
      setResponse("Error sending email.");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <InputField>
        <Input
          type="text"
          id={nameId}
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          value={message}
          onChange={(e) => setMessage(e.target.value)}
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
          How can we help you?
        </Label>
      </InputField>
      <Button content={"Submit"} bg={true} />
      <ResponseWrapper>{response}</ResponseWrapper>
    </StyledForm>
  );
};
