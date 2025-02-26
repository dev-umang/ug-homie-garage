const getKey = (
  val: string,
  checkData: { key: string }[],
  append?: string,
): string => {
  if (!val) return "";
  const key = val.toLowerCase().replace(/ /g, "-") + (append?.toString() ?? "");

  if (checkData.length && checkData?.find((x) => x.key === key))
    return getKey(
      val,
      checkData,
      `-${Math.random().toString(36).substring(2, 5)}`,
    );
  return key;
};

export const generate = {
  key: getKey,
};
