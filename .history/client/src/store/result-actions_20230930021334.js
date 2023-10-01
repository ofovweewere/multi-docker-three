import { resultActions } from "./result-slice";

export const fetchData = (payload) => {
  return async (dispatch) => {
    const fetchHandler = async () => {
      const res = await fetch("/search", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      return data;
    };
    try {
      const result = await fetchHandler();

      if (result) {
        dispatch(resultActions.searchComplete(result));
      }
    } catch (err) {
      dispatch(resultActions.searchError(err));
    }
  };
};
