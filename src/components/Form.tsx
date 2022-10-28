import { ChangeEvent, FormEvent, forwardRef } from "react";

interface Props {
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const Form = forwardRef<HTMLInputElement, Props>(function Form(
  { onSubmit, onChange },
  ref
): JSX.Element {
  return (
    <form onSubmit={onSubmit}>
      <input
        type="search"
        name="filter"
        onChange={onChange}
        ref={ref}
        autoComplete="off"
        placeholder="Type your country"
      />
    </form>
  );
});

export default Form;
