import Link from 'next/link';
import { useState, useEffect } from "react";

import { useContent } from '../../hooks/useContent';
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import CommentItem from "./CommentItem/CommentItem";

const CommentList = ({ storyId, permalinkId }) => {
  const defaultItemCount = 5;
  const itemIncrementCount = 8;
  const defaultDepthLimit = 2;
  const { isLoading, isError, data: storyData, isSuccess } = useContent(storyId);
  const [itemCount, setItemCount] = useState(defaultItemCount);
  const [itemIds, setItemIds] = useState(null);
  const isPermalink = permalinkId ? true : false;

  const handleClick = (e) => {
    e.preventDefault();
    const newCount = itemCount + itemIncrementCount;
    setItemCount(newCount);
  }

  // if permalink
  useEffect(() => {
    if (permalinkId) {
      setItemIds([permalinkId]);
    }
  }, [permalinkId]);

  // on story data kids change, append on end + deduplicate
  useEffect(() => {
    if (!permalinkId && storyData?.kids) {
      if (itemIds) {
        setItemIds([...new Set([...itemIds,...storyData.kids])]);
      } else {
        setItemIds(storyData.kids);
      }
    }
  }, [storyData?.kids]);

  return isLoading ? (<IsLoading />) : isError ? <IsError /> : !storyData ? (<IsError contentId={storyId} />) : isSuccess && !(storyData.type === "story" || storyData.type === "poll") ? <IsError contentId={storyId} contentType="Story" /> : (  
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
      { itemIds && (
        <div className="grid content-start sm:first:mt-3 sm:last:mb-3">
          { [...itemIds].slice(0, itemCount).map((commentId) => (
              <CommentItem
                key={commentId}
                commentId={commentId}
                submitterId={storyData.by}
                storyId={storyId}
                replyDepthLimit={defaultDepthLimit}
                isPermalink={isPermalink}
              />
            )
          )}
        </div>
      )}

      {/* load more comments trigger */}
      { !isPermalink && itemIds && itemIds.length > itemCount && (
        <div className="grid border-t-brandDefault border-t-brandButtonOutline px-4 py-3 transition-colors dark:border-t-brandDarkBorder sm:border-none sm:p-3">
          <button
            className="font-medium text-xs text-brandButtonInlineText tracking-wider text-left dark:text-brandDarkTextPrimary sm:text-brandOrange sm:hover:underline sm:dark:text-brandOrange"
            onClick={(e) => handleClick(e)}
          >
            <span className="sm:hidden">
              Show { itemIds.length-itemCount > itemIncrementCount ? itemIncrementCount : itemIds.length-itemCount } more comment{ itemIds.length-itemCount > 1 && "s" }
            </span>
            <span className="hidden sm:block">
              { itemIds.length-itemCount > itemIncrementCount ? itemIncrementCount : itemIds.length-itemCount } more repl{ itemIds.length-itemCount > 1 ? "ies" : "y" }
            </span>
          </button>
        </div>
      )}
    </div>
  );
}
 
export default CommentList;