import { ChangeEvent, FC, FormEvent, RefObject } from "react";

interface Props {
  onSubmit: (evt: FormEvent<HTMLFormElement>) => void;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  innerRef: RefObject<HTMLInputElement>;
}

function withExtraInfo(Component: FC<Props>): FC<Props> {
  const Wrapper: FC<any> = ({ innerRef, ...props }) => {
    return <Component {...props} ref={innerRef} />;
  };

  return Wrapper;
}

export default withExtraInfo;
