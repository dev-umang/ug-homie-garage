import { useSearchParams } from "react-router-dom";

// Search fields are used for key of URLSearchParams.
export type SearchFields = "addVehicle";

export type SearchQueryObject = {
  [k in SearchFields]?: string | boolean | number;
};

const useSearch = () => {
  const [params, setParams] = useSearchParams();

  // Will return
  const query = (
    field: SearchFields,
    compareValue?: string | boolean | number,
  ) => {
    const val = params.get(field);
    if (compareValue)
      return typeof compareValue === "boolean"
        ? Boolean(val) === compareValue
        : val === compareValue;
    return val;
  };

  const updateQuery = (object: SearchQueryObject, replace?: boolean) =>
    setParams(object as { [k: string]: string }, { replace });

  const deleteParam = (key: SearchFields | SearchFields[], replace?: boolean) =>
    setParams(
      (prev) => {
        if (typeof key === "string") prev.delete(key);
        else for (const k of key) prev.delete(k);
        return prev;
      },
      { replace },
    );

  return { query, updateQuery, deleteParam };
};

export default useSearch;
