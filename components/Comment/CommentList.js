import Link from 'next/link';
import { useState, useEffect } from "react";

import { useStory } from "../../hooks/useStory";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import CommentItem from "./CommentItem/CommentItem";

const CommentList = ({ storyId, permalinkId }) => {
  const defaultItemCount = 5;
  const itemIncrementCount = 8;
  const defaultDepthLimit = 2;
  const { isLoading, isError, data: storyData, isSuccess } = useStory(storyId, false);
  const [itemCount, setItemCount] = useState(defaultItemCount);
  const [itemIds, setItemIds] = useState(null);
  const isPermalink = permalinkId ? true : false;

  const handleClick = (e) => {
    e.preventDefault();
    const newCount = itemCount + itemIncrementCount;
    setItemCount(newCount);
  }

  useEffect(() => {
    if (storyData) {
      // skip array operations if lengths are equal
      if (itemIds && storyData.kids) {
        if (itemIds.length === storyData.kids.length) {
          return;
        }
      }
      // only have permalink in the list if its present
      if (permalinkId) {
        setItemIds([permalinkId]);
      } else if (storyData.kids) {
        setItemIds([...storyData.kids].slice(0, itemCount));
      }
    }
  }, [itemCount, storyData]);

  return isLoading ? (<IsLoading />) : isError || !storyData ? (<IsError />) : isSuccess && (storyData.type === "story" || storyData.type === "poll") && (  
    <div className="self-start grid content-start bg-brandObjectBackground text-brandTextPrimary transition-colors dark:border-b-brandDefault dark:border-b-brandDarkBorder dark:bg-brandDarkAppBackground dark:text-brandDarkTextPrimary sm:border-brandDefault sm:border-brandBorder sm:rounded sm:pl-1 sm:pr-5 sm:shadow-sm sm:dark:border-brandDarkBorder sm:dark:bg-brandDarkObjectBackground">
      {/* hide on permalink */}
      { !isPermalink && (
        <>
          {/* mobile */}
          <div className="grid mb-1 px-4 py-3 sm:hidden">
            <span className="font-bold text-xs">
              { storyData.descendants === 0 ? "No" : storyData.descendants } Comment{ storyData.descendants !== 1 && "s" }
            </span>
          </div>

          {/* desktop */}
          { storyData.descendants === 0 ? (
            <div className="hidden p-3 sm:grid">
              <span className="font-medium">
                No Comments
              </span>
            </div>
          ) : (
            <div className="hidden pb-3 sm:block" />
          )}
        </>
      )}
      
      {/* story link on permalink route */}
      { isPermalink && (
        <div className="grid justify-end px-4 py-3 sm:justify-start sm:p-3 sm:pl-8">
          <Link href={"/story/" + storyId}>
            <a className="text-xs text-brandOrange sm:hover:underline">
              <span className="font-medium sm:hidden">See full discussion</span>
              <span className="hidden font-bold tracking-wide sm:block">View all comments</span>
            </a>
          </Link>
        </div>
      )}
      
      {/* comment list */}
      { storyData.kids && (
        <div className="grid content-start sm:first:mt-3 sm:last:mb-3">
          { itemIds && (
            itemIds.map((commentId) => (
              <CommentItem
                key={commentId}
                commentId={commentId}
                submitterId={storyData.by}
                storyId={storyId}
                replyDepthLimit={defaultDepthLimit}
                isPermalink={isPermalink}
              />
            ))
          )}
        </div>
      )}

      {/* load more comments trigger */}
      { !isPermalink && storyData.kids && storyData.kids.length > itemCount && (
        <div className="grid border-t-brandDefault border-t-brandButtonOutline px-4 py-3 transition-colors dark:border-t-brandDarkBorder sm:border-none sm:p-3">
          <button
            className="font-medium text-xs text-brandButtonInlineText tracking-wider text-left dark:text-brandDarkTextPrimary sm:text-brandOrange sm:hover:underline sm:dark:text-brandOrange"
            onClick={(e) => handleClick(e)}
          >
            <span className="sm:hidden">
              Show { storyData.kids.length-itemCount > itemIncrementCount ? itemIncrementCount : storyData.kids.length-itemCount } more comment{ storyData.kids.length-itemCount > 1 && "s" }
            </span>
            <span className="hidden sm:block">
              { storyData.kids.length-itemCount > itemIncrementCount ? itemIncrementCount : storyData.kids.length-itemCount } more repl{ storyData.kids.length-itemCount > 1 ? "ies" : "y" }
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
 
export default CommentList;