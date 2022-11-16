import { useId } from "react";
import { countries, country } from "../interface/data";

interface Props {
  results: countries;
  onClick: (value: string) => void;
}

const ListCountry = ({ results, onClick }: Props): JSX.Element => {
  const uniqueID = useId();

  if (results.length === 0) {
    return (
      <div className="list-countries">
        <div
          className="show-element"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <span>Escriba un valor valido</span>
        </div>
      </div>
    );
  }

  return (
    <div className="list-countries">
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
