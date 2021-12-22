import { useEffect, useState } from "react";
import { useRouter } from "next/dist/client/router";

import { useCountQueryString } from "../../../hooks/useCountQueryString";
import UserViewContentItemSelector from "./UserViewContentItemSelector";

const UserViewContentList = ({ contentIds, userId }) => {
  const defaultItemCount = 15; 
  const itemIncrementCount = defaultItemCount;
  const router = useRouter();
  const [itemCount, setItemCount] = useState(null);
  const [itemIds, setItemIds] = useState(null);
  const [contentTypeFilter, setContentTypeFilter] = useState(null);

  const handleClick = (e) => {
    e.preventDefault();
    // set new count value then update count url query string
    const newCount = itemCount + itemIncrementCount;
    setItemCount(newCount);
    router.push({
      pathname: router.pathname,
      query: { userid: userId, count: newCount },
    }, undefined, { shallow: true });
  }

  // set item ids
  useEffect(() => {
    if (contentIds) {
      setItemIds([...contentIds].slice(0, itemCount));
    }
  }, [contentIds, itemCount]);

  // get count query string
  useEffect(() => {
    setItemCount(useCountQueryString(defaultItemCount));
  }, []);

  // set content type filter, only set if different from old value
  useEffect(() => {
    const path = router.pathname;
    if (path) {
      if (path.includes("stories") && contentTypeFilter !== "story") {
        setContentTypeFilter("story");
      } else if (path.includes("comments") && contentTypeFilter !== "comment") {
        setContentTypeFilter("comment");
      } else if (contentTypeFilter) {
        setContentTypeFilter(null);
      }
    }
  }, [router?.pathname]);

  return !itemIds ? (<MessageNoContentFound userId={userId} />) : (  
    <div className="grid content-start gap-1 sm:gap-2">
      {/* list */}
      <div className="grid content-start gap-1 sm:gap-3">
        { itemIds && (
          itemIds.map((contentId) => (
            <UserViewContentItemSelector
              key={contentId}
              contentId={contentId}
              contentTypeFilter={contentTypeFilter}
              userId={userId}
            />
          ))
        )}
      </div>

      {/* view more contents button */}
      { itemCount && itemCount < contentIds.length && (
        <div className="grid px-4 py-[0.625rem] bg-white sm:place-items-center sm:bg-transparent sm:pb-0">
          <button 
            className="rounded-full px-10 py-[0.375rem] bg-brandOrange font-medium text-sm text-white transition-opacity hover:opacity-80 active:opacity-60"
            onClick={(e) => handleClick(e)}
          >
            View More Submissions
          </button>
        </div>
      )}
    </div>
  );
}

const MessageNoContentFound = ({ userId }) => {
  return (
    <div className="grid place-items-center px-5 py-10 md:py-20">
      <p className="grid gap-5 text-center sm:gap-8 lg:gap-10">
        <span 
          className="text-5xl drop-shadow-md sm:text-6xl lg:text-8xl lg:drop-shadow-lg"
          title="thinking emoji"
        >
          🤔
        </span>
        <span className="font-medium text-lg tracking-wide">
          hmm... u/{ userId } hasn't posted anything
        </span>
      </p>
    </div>
  )
}
 
export default UserViewContentList;