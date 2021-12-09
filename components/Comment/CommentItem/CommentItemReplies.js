import { useState } from "react";

import CommentItem from "./CommentItem";

const CommentItemReplies = ({ replyIds, replyDepthLimit, parentDepth }) => {
  const [isLoadedManually, setIsLoadedManually] = useState(false);
  const currentDepth = parentDepth + 1;

  return !replyIds ? null : replyIds.length <= 0 ? null : (
    (currentDepth < replyDepthLimit) || isLoadedManually ? (
      <div className="grid gap-4 border-l-brandDefault border-brandButtonOutline pl-4 mt-4">
        { replyIds.map((replyId) => (
          <CommentItem 
            key={replyId}
            commentId={replyId} 
            replyDepthLimit={replyDepthLimit}
            parentDepth={currentDepth}
          />
        ))}
      </div>
    ) : (
      <div className="grid place-items-start border-l-brandDefault border-brandButtonOutline mt-2 px-4">
        <button 
          className="font-bold text-xs text-brandButtonInlineText tracking-wide text-left hover:underline sm:text-brandTextPrimary sm:tracking-normal"
          onClick={() => setIsLoadedManually(true)}
        >
          { replyIds.length } more repl{ replyIds.length > 1 ? "ies" : "y" }
        </button>
      </div>
    )
  );
}
 
export default CommentItemReplies;