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

  // set count from count query string on page load
  useEffect(() => {
    setItemCount(useCountQueryString(defaultItemCount));
  }, []);

  // set and update filter on pathname change
  useEffect(() => {
    const path = router.pathname;
    if (path) {
      if (path.includes("stories") && contentTypeFilter !== "story") {
        setContentTypeFilter("story");
      } else if (path.includes("comments") && contentTypeFilter !== "comment") {
        setContentTypeFilter("comment");
      } else if (!path.includes("stories") && !path.includes("comments")) {
        setContentTypeFilter(null);
      }
    }
  }, [router?.pathname]);

  // on content ids change, append on end + deduplicate
  useEffect(() => {
    if (contentIds) {
      if (itemIds) {
        setItemIds([...new Set([...itemIds, ...contentIds])]);
      } else {
        setItemIds(contentIds);
      }
    }
  }, [contentIds]);

  return !itemIds ? (<MessageNoContentFound userId={userId} />) : (  
    <div className="grid content-start gap-1 sm:gap-2">
      {/* list */}
      <div className="grid content-start gap-1 sm:gap-3">
        { itemIds && (
          [...itemIds].slice(0, itemCount).map((contentId) => (
            <UserViewContentItemSelector
              key={contentId}
              contentId={contentId}
              contentTypeFilter={contentTypeFilter}
              userId={userId}
            />
          ))
        )}
        
        {/* add prompt if there are not filtered items */}
        { itemIds && contentTypeFilter && (
          <div className="hidden only:grid gap-5 px-5 py-10 text-center sm:gap-8 md:py-20 lg:gap-10">
            <p
              className="text-6xl drop-shadow-md sm:text-7xl lg:text-8xl lg:drop-shadow-lg"
              title="thinking emoji"
            >
              🤔
            </p>
            <p className="font-medium text-lg text-brandTextPrimary dark:text-brandDarkTextPrimary tracking-wide">
              hmm... u/{ userId } hasn't posted any { contentTypeFilter } from their past { itemCount } submissions
            </p>
          </div>
        )}
      </div>

      {/* view more contents button */}
      { itemCount && itemCount < itemIds.length && (
        <div className="grid px-4 py-[0.625rem] bg-brandObjectBackground transition-colors dark:bg-brandDarkAppBackground sm:justify-center sm:bg-transparent sm:dark:bg-transparent sm:pb-0">
          <button 
            className="rounded-full px-10 py-[9px] bg-brandOrange font-bold text-sm text-white tracking-wide leading-none transition-all hover:opacity-80 active:opacity-60 dark:bg-brandDarkButton dark:text-brandTextPrimary"
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
          className="text-6xl drop-shadow-md sm:text-7xl lg:text-8xl lg:drop-shadow-lg"
          title="thinking emoji"
        >
          🤔
        </span>
        <span className="font-medium text-lg text-brandTextPrimary dark:text-brandDarkTextPrimary tracking-wide">
          hmm... u/{ userId } hasn't posted anything
        </span>
      </p>
    </div>
  )
}
 
export default UserViewContentList;