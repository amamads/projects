const getInitial = (str: string) =>
  str
    .trim()
    .split(/\s+/)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

export default getInitial;
