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

export const generator = {
  key: getKey,
};
