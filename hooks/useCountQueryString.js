import { parse } from "query-string";

const useCountQueryString  = (defaultCount) => {
  const countQueryString = parse(location.search).count;
  if (countQueryString) {
    const count = parseInt(countQueryString);
    return (count === NaN || count < defaultCount) ? defaultCount : count;
  } 
  return defaultCount;
}

export { useCountQueryString }