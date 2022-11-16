import { Dispatch, useReducer } from "react";

interface stateReducer {
  country: string | undefined;
}

interface actionReducer {
  type: "chanceCountry";
  payload: {
    country: string;
  };
}

interface data {
  countrySelect: stateReducer;
  dispatch: Dispatch<actionReducer>;
}

const INITIAL_VALUE = {
  country: undefined,
};

const callback = (state: stateReducer, action: actionReducer): stateReducer => {
  switch (action.type) {
    case "chanceCountry":
      return { ...state, country: action.payload.country };
  }
};

function useCountrySelect(): data {
  const [countrySelect, dispatch] = useReducer(callback, INITIAL_VALUE);

  return {
    countrySelect,
    dispatch,
  };
}

export default useCountrySelect;
