import { useId } from "react";
import { countries, country } from "../interface/data";

interface Props {
  results: countries;
  select: string | undefined;
  onClick: (value: string) => void;
}

const ListCountry = ({ results, onClick, select }: Props): JSX.Element => {
  const uniqueID = useId();

  return (
    <div className="list-countries">
      {results.length === 0 && select !== undefined && select.length > 0 && (
        <div
          style={{
            display: "flex",
            height: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1>Selected country</h1>
          <h2>{select.toUpperCase()}</h2>
        </div>
      )}
      {results.map((data: country, index: number) => (
        <button
          key={`${uniqueID}-${index}`}
          onClick={() => {
            onClick(data.name);
          }}
          className="show-element"
        >
          <span>
            {data.code} - {data.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default ListCountry;
