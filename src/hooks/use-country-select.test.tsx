import { renderHook } from "@testing-library/react";
import { act } from "react-test-renderer";
import useCountrySelect from "./useContrySelect";

test("test hook", async () => {
  const { result } = renderHook(() => useCountrySelect());

  await act(() => {
    result.current.dispatch({
      type: "chanceCountry",
      payload: { country: "Mexico" },
    });
  });

  expect(result.current.countrySelect.country).toBe("Mexico");
});
