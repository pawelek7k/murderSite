import { Button } from "../../Button";
import { FormStyles, Input, Label, Textarea, Wrapper } from "./Styles";

export const Form = () => {
  return (
    <FormStyles>
      <Wrapper>
        <Input placeholder="‎" type="text" required />
        <Label htmlFor="name">Name</Label>
      </Wrapper>
      <Wrapper>
        <Input placeholder="‎" type="email" id="email" name="email" required />
        <Label htmlFor="email">Email</Label>
      </Wrapper>
      <Wrapper>
        <Textarea
          placeholder="‎"
          id="comment"
          name="comment"
          required
        ></Textarea>
        <Label htmlFor="comment">Comment</Label>
      </Wrapper>
      <Button content={"Submit"} bg={false} />
    </FormStyles>
  );
};
