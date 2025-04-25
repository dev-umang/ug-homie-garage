import { QuerySnapshot } from "firebase/firestore";

const getKey = (val: string, checkData: { key: string }[]): string => {
  if (!val) return "";
  const key = val
    .toLowerCase()
    .replace(/ /g, "-")
    .concat(`-${Math.random().toString(36).substring(2, 5)}`);
  if (checkData.length && checkData?.find((x) => x.key === key))
    return getKey(val, checkData);
  return key;
};

// Generate data list from the documents data of the firestore.
const getListFromQuery = <T>(res: QuerySnapshot): T[] => {
  const _list: T[] = [];
  for (const doc of res.docs) {
    const _data = doc.data() as T; // No need for explicit casting here
    _list.push(_data);
  }
  return _list;
};
export const generator = {
  key: getKey,
  firestore: getListFromQuery,
};
