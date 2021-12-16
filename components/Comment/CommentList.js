import { useState, useEffect } from "react";

import { useStory } from "../../hooks/useStory";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import CommentItem from "./CommentItem/CommentItem";

const CommentList = ({ storyId }) => {
  const defaultItemCount = 5;
  const itemIncrementCount = 8;
  const defaultDepthLimit = 2;
  const { isLoading, isError, data: storyData, isSuccess } = useStory(storyId, false);
  const [itemCount, setItemCount] = useState(defaultItemCount);
  const [itemIds, setItemIds] = useState(null);

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
      
      setItemIds([...storyData.kids].slice(0, itemCount));
    }
  }, [itemCount, storyData]);

  return isLoading ? (<IsLoading />) : isError || !storyData ? (<IsError />) : isSuccess && (  
    <div className="grid content-start gap-3 pt-1 pb-3 bg-white sm:gap-1 sm:border-brandDefault sm:border-brandBorder sm:rounded sm:p-3 sm:pr-5 sm:shadow-sm">
      {/* mobile comment count (displayed by default) */}
      <div className="px-4 sm:hidden">
        <span className="font-bold text-xs sm:hidden">
          { storyData.descendants === 0 ? "No" : storyData.descendants } Comment{ storyData.descendants !== 1 && "s" }
        </span>
      </div>

      {/* desktop comment count (only displayed if there are no comments) */}
      { storyData.descendants === 0 && (
        <div className="hidden sm:block">
          <span className="font-medium">
            No Comments
          </span>
        </div>
      )}
      
      {/* comment list */}
      { storyData.kids && (
        <div className="grid content-start gap-5 sm:gap-7">
          { itemIds && (
            itemIds.map((commentId) => (
              <CommentItem
                key={commentId}
                commentId={commentId}
                submitterId={storyData.by}
                replyDepthLimit={defaultDepthLimit}
              />
            ))
          )}
        </div>
      )}

      {/* load more comments trigger */}
      { storyData.kids && storyData.kids.length > itemCount && (
        <div className="border-t-brandDefault border-t-brandButtonOutline mt-2 px-4 pt-3 pb-1 sm:border-none sm:mt-0 sm:px-2 sm:py-0">
          <button
            className="font-bold text-xs text-brandButtonInlineText tracking-wider text-left hover:underline sm:text-brandOrange"
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