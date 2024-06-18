import { nanoid } from "nanoid";
import { Button } from "../../Button";
import { FormStyles, Input, Label, Textarea, Wrapper } from "./Styles";

export const Form = () => {
  const textAreaId = nanoid();
  const emailId = nanoid();
  const nameId = nanoid();
  return (
    <FormStyles>
      <Wrapper>
        <Input id={nameId} placeholder="‎" type="text" required />
        <Label htmlFor={nameId}>Name</Label>
      </Wrapper>
      <Wrapper>
        <Input
          placeholder="‎"
          type="email"
          id={emailId}
          name="email"
          required
        />
        <Label htmlFor={emailId}>Email</Label>
      </Wrapper>
      <Wrapper>
        <Textarea
          placeholder="‎"
          id={textAreaId}
          name="comment"
          required
        ></Textarea>
        <Label htmlFor={textAreaId}>Comment</Label>
      </Wrapper>
      <Button content={"Submit"} bg={false} />
    </FormStyles>
  );
};
