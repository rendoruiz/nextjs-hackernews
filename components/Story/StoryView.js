import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

import { useCountQueryString } from "../../hooks/useCountQueryString";
import SiteLayout from "../SiteLayout";
import StoryNav from "./StoryNav";
import StoryList from "./StoryList";

const StoryView = ({ useHook, activeRoute }) => {
  const router = useRouter();
  // todo: local state management & retain scroll position when navigating back
  const [itemCount, setItemCount] = useState(null);  
  const defaultCount = 25; 

  useEffect(() => {
    setItemCount(useCountQueryString(defaultCount));
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
        <div className="grid mt-1 px-4 py-[0.625rem] bg-white sm:place-items-center sm:bg-transparent sm:mt-2 sm:pb-0">
          <button 
            className="rounded-full px-10 py-[0.375rem] bg-brandOrange font-medium text-sm text-white transition-opacity hover:opacity-80 active:opacity-60"
            onClick={(e) => handleClick(e)}
          >
            View More Stories
          </button>
        </div>
      )}
    </SiteLayout>
  );
}

export default StoryView;