import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { useCountQueryString } from "../../hooks/useCountQueryString";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import StoryItem from "./StoryItem/StoryItem";

const StoryList = ({ useHook }) => {
  const defaultItemCount = 15; 
  const itemIncrementCount = defaultItemCount;
  const router = useRouter();
  const { isLoading, isError, data, isSuccess } = useHook;
  const [itemCount, setItemCount] = useState(null);
  const [itemIds, setItemIds] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    // set new count value then update count url query string
    const newCount = itemCount + itemIncrementCount;
    setItemCount(newCount);
    router.push({
      pathname: router.pathname,
      query: { count: newCount },
    }, undefined, { shallow: true });
  }

  // set item ids
  useEffect(() => {
    if (data) {
      setItemIds([...data].slice(0, itemCount));
    }
  }, [data, itemCount]);

  // get count query string
  useEffect(() => {
    setItemCount(useCountQueryString(defaultItemCount));
  }, []);

  return isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (  
    <div className="grid content-start gap-1 transition-colors dark:bg-brandDarkObjectBackground sm:gap-2 sm:dark:bg-transparent">
      <div className="grid content-start gap-1 sm:gap-3">
        { itemIds && (
          itemIds.map((storyId) => (
            <StoryItem
              key={storyId}
              storyId={storyId}
            />
          ))
        )}
      </div>

      { itemCount && itemCount < data.length && (
        <div className="grid px-4 py-[0.625rem] bg-brandObjectBackground transition-colors dark:bg-brandDarkAppBackground sm:place-items-center sm:bg-transparent sm:dark:bg-transparent sm:pb-0">
          <button 
            className="rounded-full px-10 py-[0.375rem] bg-brandOrange font-bold text-sm text-white tracking-wide transition-all hover:opacity-80 active:opacity-60 dark:bg-brandDarkButton dark:text-brandTextPrimary"
            onClick={(e) => handleClick(e)}
          >
            View More Stories
          </button>
        </div>
      )}
    </div>
  );
}
 
export default StoryList;