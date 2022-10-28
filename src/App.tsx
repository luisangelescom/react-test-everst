import { ChangeEvent, FormEvent, useState, useRef } from "react";

import testData from "./utils/data";

import ListCountry from "./components/ListCountry";
import Form from "./components/Form";

import "./App.css";
interface countries {
  name: string;
  code: string;
}

const dataAll: countries[] = testData;

function App(): JSX.Element {
  const [results, setResults] = useState<countries[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  const onChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setResults(
      dataAll.filter((f) => {
        const valueInput = evt.target.value.trim().toUpperCase();
        const dataName = f.name.toUpperCase();
        const dataCode = f.code.toUpperCase();

        return (
          valueInput.length > 0 &&
          (dataName.includes(valueInput) || dataCode.includes(valueInput))
        );
      })
    );
  };

  const onClick = (value: string): void => {
    if (inputRef.current?.value != null) {
      inputRef.current.value &&= value;
      setResults([]);
    }
  };

  return (
    <div className="container">
      <Form onChange={onChange} onSubmit={onSubmit} ref={inputRef}></Form>
      <ListCountry
        results={results}
        onClick={onClick}
        select={inputRef.current?.value}
      />
    </div>
  );
}

export default App;
