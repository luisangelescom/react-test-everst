import { ChangeEvent, FormEvent, useState, useRef, useEffect } from "react";

import ListCountry from "./components/ListCountry";
import Form from "./components/Form";

import userFetchData from "./hooks/useFetchData";

import "./App.css";
interface countries {
  name: string;
  code: string;
}

function App(): JSX.Element {
  const [results, setResults] = useState<countries[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const { data, loading } = userFetchData();

  useEffect(() => {}, []);

  const onSubmit = (evt: FormEvent<HTMLFormElement>): void => {
    evt.preventDefault();
  };

  const onChange = (evt: ChangeEvent<HTMLInputElement>): void => {
    setResults(
      data.filter((f) => {
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
      {loading ? (
        <div className="center-loading">
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1>Loading</h1>
        </div>
      ) : (
        <div
          style={{
            width: "25rem",
            border: "1px solid black",
            borderRadius: 30,
            display: "flex",
            flexDirection: "column",
            minHeight: 20,
            justifyContent: "center",
            alignItems: "center",
            margin: "1rem",
          }}
        >
          <Form onChange={onChange} onSubmit={onSubmit} ref={inputRef}></Form>
          <ListCountry results={results} onClick={onClick} />
        </div>
      )}
    </div>
  );
}

export default App;
