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
    <SiteLayout contentClassName="grid-rows-[auto,1fr,auto]">
      {/* Navbar */}
      <StoryNav activeRoute={activeRoute} />

      {/* Stories */}
      <StoryList 
        useHook={useHook} 
        itemLimit={itemCount}
      />

      { itemCount && (
        <button 
          className="place-self-stretch rounded-full mt-4 px-10 py-1 bg-brandOrange font-bold text-white transition-opacity hover:opacity-80 active:opacity-60 sm:place-self-center"
          onClick={(e) => handleClick(e)}
        >
          Next
        </button>
      )}
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