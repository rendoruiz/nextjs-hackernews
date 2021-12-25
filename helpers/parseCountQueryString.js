import { parse } from "query-string";

const parseCountQueryString  = (defaultCount) => {
  const countQueryString = parse(location.search).count;
  if (countQueryString) {
    const count = parseInt(countQueryString);
    return (count === NaN || count < defaultCount) ? defaultCount : count;
  } 
  return defaultCount;
}

export { parseCountQueryString }