import SiteLayout from "../SiteLayout";
import StoryNav from "./StoryNav";
import StoryList from "./StoryList";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";
import { parse as parseQuery } from "query-string";

const defaultCount = 25;

const StoryView = ({ useHook, activeRoute }) => {
  const router = useRouter();
  // todo: local state management & retain scroll position when navigating back
  const [itemCount, setItemCount] = useState(null);   

  useEffect(() => {
    setItemCount(parseCountQueryString(parseQuery(location.search).count));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const newCount = itemCount + defaultCount;
    setItemCount(newCount);
    router.push({
      pathname: router.pathname,
      query: { count: newCount },
    }, undefined, { shallow: true });
  }

  return ( 
    <SiteLayout contentClassName=" auto-rows-auto">
      {/* Navbar */}
      <StoryNav activeRoute={activeRoute} />

      {/* Stories */}
      <StoryList 
        useHook={useHook} 
        itemLimit={itemCount}
      />

      <button 
        className="place-self-start rounded-full mt-5 px-5 py-1 bg-brandOrange text-white"
        onClick={(e) => handleClick(e)}
      >
        Next
      </button>
    </SiteLayout>
  );
}

const parseCountQueryString = (countValue) => {
  if (countValue) {
    const count = parseInt(countValue);
    return (count === NaN || count < defaultCount) ? defaultCount : count;
  } 
  return defaultCount;
}

export default StoryView;