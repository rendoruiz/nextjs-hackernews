import { useState } from "react";

import CommentItem from "./CommentItem";

const CommentItemReplies = ({ replyIds, replyDepthLimit, parentDepth }) => {
  const currentDepth = parentDepth + 1;
  const defaultReplyCount = 3;
  const replyIncrementCount = 5;
  const [replyCount, setReplyCount] = useState(defaultReplyCount);
  const [isChildrenLoaded, setIsChildrenLoaded] = useState(false);

  const isReplyDepthLimitReached = () => {
    return (currentDepth >= replyDepthLimit) ? true : false;
  }

  const handleClick = (e) => {
    e.preventDefault();
    if (isReplyDepthLimitReached() && !isChildrenLoaded) {
      setIsChildrenLoaded(true);
    } 
    else {
      const newCount = replyCount + replyIncrementCount;
      setReplyCount(newCount);
    }
  }

  // automatically display component until the set replyDepthLimit has been reached.
  // if replyDepthLimit has been reached, a trigger will be displayed to manually load the replies with the provided replyIds.
  // a trigger will also be displayed if not all children are loaded.
  return !replyIds ? null : replyIds.length <= 0 ? null : (
    <div className="grid gap-4 border-l-brandDefault border-brandButtonOutline mt-4 pl-4">
      {/* comment replies */}
      { (!isReplyDepthLimitReached() || isChildrenLoaded) && (
        <div className="grid gap-4">
          { [...replyIds].slice(0, replyCount).map((replyId) => (
            <CommentItem 
              key={replyId}
              commentId={replyId} 
              replyDepthLimit={replyDepthLimit}
              parentDepth={currentDepth}
            />
          ))}
        </div>
      )}

      {/* display load more replies button if: a) no children has been loaded, b) not all child replies are loaded */}
      { ((isReplyDepthLimitReached() && !isChildrenLoaded) || replyIds.length > replyCount) && (
        <div className="grid place-items-start">
          <button 
            className="font-bold text-xs text-brandButtonInlineText tracking-wide text-left hover:underline sm:text-brandTextPrimary sm:tracking-normal"
            onClick={(e) => handleClick(e)}
          >
            { isReplyDepthLimitReached() ? (
              <span>{ replyIds.length } more repl{ replyIds.length > 1 ? "ies" : "y" }</span>
            ) : (
              <span>{ replyIds.length-replyCount } more repl{ replyIds.length-replyCount > 1 ? "ies" : "y" }</span>
            )}
          </button>
        </div>
      )}
    </div>
  );
}
 
export default CommentItemReplies;