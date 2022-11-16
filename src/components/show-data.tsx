import { ChangeEvent, FormEvent, useRef, useState } from "react";

import { countries } from "../interface/data";

import Form from "./Form";
import ListCountry from "./ListCountry";

interface Props {
  data: countries;
}

interface validateProps {
  dataName: boolean;
  dataCode: boolean;
  valueInput: boolean;
}

function ShowData({ data }: Props): JSX.Element {
  const [results, setResults] = useState<countries>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  const isContainer = ({
    dataName,
    dataCode,
    valueInput,
  }: validateProps): boolean => valueInput && (dataName || dataCode);

  const onChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    const valueInput: string = evt.target.value.trim().toUpperCase();
    setResults(
      data.filter((f) => {
        const dataName: string = f.name.toUpperCase();
        const dataCode: string = f.code.toUpperCase();
        return isContainer({
          dataCode: dataCode.includes(valueInput),
          dataName: dataName.includes(valueInput),
          valueInput: valueInput.trim().length > 0,
        });
      })
    );
  };

  const changeValue = (value: string): void => {
    if (inputRef.current?.value != null) {
      inputRef.current.value = value;
    }
  };

  const onClick = (value: string): void => {
    changeValue(value);
    setResults([]);
  };

  return (
    <div className="border-container">
      <Form onChange={onChange} onSubmit={onSubmit} innerRef={inputRef} />
      <ListCountry results={results} onClick={onClick} />
    </div>
  );
}

export default ShowData;
