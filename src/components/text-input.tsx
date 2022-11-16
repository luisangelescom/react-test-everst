import { memo } from "react";
import useCountrySelect from "../hooks/useContrySelect";
// import withExtraInfo from "../wrapper-loading";

// interface Props {
//   type: string | undefined;
// }

// const TextInput = (props: Props): JSX.Element => {
const TextInput = (): JSX.Element => {
  const { countrySelect } = useCountrySelect();
  return (
    <>
      <h1>Country</h1>
      {countrySelect.country}
    </>
  );
};

// export default withExtraInfo(TextInput);

export default memo(TextInput);
