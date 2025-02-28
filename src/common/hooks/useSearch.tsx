import { useSearchParams } from "react-router-dom";

export type SearchFields = "q_garagePopup" | "q_garageKey";

const useSearch = () => {
  const [params, setParams] = useSearchParams();

  const query = (field: SearchFields) => {
    const val = params.get(field);
    return val;
  };

  const updateQuery = (
    object: { [k in SearchFields]?: string },
    replace?: boolean,
  ) => {
    setParams(object, { replace });
  };

  return { query, updateQuery };
};

export default useSearch;
