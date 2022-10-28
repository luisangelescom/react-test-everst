import { useId } from "react";
import { countries, country } from "../interface/data";

interface Props {
  results: countries;
  onClick: (value: string) => void;
}

const ListCountry = ({ results, onClick }: Props): JSX.Element => {
  const uniqueID = useId();

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
