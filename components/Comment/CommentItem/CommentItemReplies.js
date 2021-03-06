import clsx from "clsx";
import { useEffect, useState } from "react";

import CommentItem from "./CommentItem";

const CommentItemReplies = ({ replyIds, replyDepthLimit, parentDepth, submitterId, storyId }) => {
  const currentDepth = parentDepth + 1;
  const defaultReplyItemCount = 3;
  const replyItemIncrementCount = 5;
  const [replyItemCount, setReplyItemCount] = useState(defaultReplyItemCount);
  const [replyItemIds, setReplyItemIds] = useState(null);
  const [isChildrenLoaded, setIsChildrenLoaded] = useState(false);
  const [isReplyDepthLimitReached, setIsReplyDepthLimitReached] = useState(true);

  const handleClick = (e) => {
    e.preventDefault();
    if (isReplyDepthLimitReached && !isChildrenLoaded) {
      setIsChildrenLoaded(true);
    } 
    else {
      const newCount = replyItemCount + replyItemIncrementCount;
      setReplyItemCount(newCount);
    }
  }

  // on reply depth limit change
  useEffect(() => {
    setIsReplyDepthLimitReached((currentDepth >= replyDepthLimit) ? true : false)
  }, [replyDepthLimit]);

  // on reply ids change
  useEffect(() => {
    if (replyIds) {
      if (replyItemIds) {
        setReplyItemIds([...new Set([...replyItemIds, ...replyIds])]);
      } else {
        setReplyItemIds(replyIds);
      }
    }
  }, [replyIds]);

  // automatically display component until the set replyDepthLimit has been reached.
  // if replyDepthLimit has been reached, a trigger will be displayed to manually load the replies with the provided replyIds.
  // a trigger will also be displayed if not all children are loaded.
  return !replyItemIds ? null : replyItemIds.length <= 0 ? null : (
    <div className={clsx(
      "grid gap-4 border-l-brandDefault border-l-brandButtonOutline mt-4 pl-4 transition-colors dark:border-l-brandDarkBorder sm:gap-2 sm:border-none sm:mt-0 sm:-ml-3 sm:pl-0",
      { "ml-8": parentDepth === 0 }
    )}>
      {/* comment replies */}
      { replyItemIds && (!isReplyDepthLimitReached || isChildrenLoaded) && (
        <div className="grid gap-4 sm:mt-4">
          { replyItemIds && (
            [...replyItemIds].slice(0, replyItemCount).map((replyId) => (
              <CommentItem 
                key={replyId}
                commentId={replyId} 
                submitterId={submitterId}
                storyId={storyId}
                replyDepthLimit={replyDepthLimit}
                parentDepth={currentDepth}
              />
            ))
          )}
        </div>
      )}

      {/* display load more replies button if: a) no children has been loaded, b) not all child replies are loaded */}
      { ((isReplyDepthLimitReached && !isChildrenLoaded) || replyItemIds.length > replyItemCount) && (
        <div className="grid sm:place-items-start sm:mt-1 sm:pb-2">
          <button 
            className="flex font-medium text-xs text-brandButtonInlineText tracking-wide text-left dark:text-brandDarkTextPrimary sm:text-brandOrange sm:tracking-normal sm:hover:underline sm:dark:text-brandOrange"
            onClick={(e) => handleClick(e)}
          >
            { isReplyDepthLimitReached && !isChildrenLoaded ? (
              <span className="sm:ml-1 sm:pt-1">
                { replyItemIds.length } more repl{ replyItemIds.length > 1 ? "ies" : "y" }
              </span>
            ) : (
              <span className="sm:ml-2">
                { replyItemIds.length-replyItemCount } more repl{ replyItemIds.length-replyItemCount > 1 ? "ies" : "y" }
              </span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
 
export default CommentItemReplies;