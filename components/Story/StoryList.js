import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { useCountQueryString } from "../../hooks/useCountQueryString";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import StoryItemWrapper from "./StoryItem/StoryItemWrapper";

const StoryList = ({ useHook }) => {
  const router = useRouter();
  const { isLoading, isError, data, isSuccess } = useHook;
  const [itemCount, setItemCount] = useState(null);  // todo: save state locally
  const defaultCount = 25; 

  const handleClick = (e) => {
    e.preventDefault();
    const newCount = itemCount + defaultCount;
    setItemCount(newCount);
    router.push({
      pathname: router.pathname,
      query: { count: newCount },
    }, undefined, { shallow: true });
  }

  useEffect(() => {
    setItemCount(useCountQueryString(defaultCount));
  }, []);

  return isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (  
    <>
      <div className="grid content-start gap-1 sm:gap-3">
        {
          [...data].slice(0, itemCount).map((storyId) => 
            <StoryItemWrapper
              key={storyId}
              storyId={storyId}
            />
          )
        }
      </div>

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
    </>
  );
}
 
export default StoryList;