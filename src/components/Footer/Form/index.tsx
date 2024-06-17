import { FormStyles, Group, Input, Label, Textarea } from "./Styles";

export const Form = () => {
  return (
    <FormStyles>
      <Group>
        <Input placeholder="‎" type="text" required />
        <Label htmlFor="name">Name</Label>
      </Group>
      <Group>
        <Input placeholder="‎" type="email" id="email" name="email" required />
        <Label htmlFor="email">Email</Label>
      </Group>
      <Group>
        <Textarea
          placeholder="‎"
          id="comment"
          name="comment"
          required
        ></Textarea>
        <Label htmlFor="comment">Comment</Label>
      </Group>
    </FormStyles>
  );
};
