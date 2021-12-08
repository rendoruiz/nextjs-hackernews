
import { useState } from "react";
import CommentItemWrapper from "./CommentItemWrapper";

const CommentItemReplies = ({ replyIds, replyDepthLimit, parentDepth }) => {
  const [isLoadedManually, setIsLoadedManually] = useState(false);
  const currentDepth = parentDepth + 1;

  // console.log({parentDepth},{currentDepth},{replyDepthLimit},currentDepth < replyDepthLimit)

  return !replyIds ? null : replyIds.length <= 0 ? null : (
    (currentDepth < replyDepthLimit) || isLoadedManually ? (
      <div className="grid gap-5 border-l-brandDefault border-brandButtonOutline pl-4 mt-5">
        { replyIds.map((replyId) => (
          <CommentItemWrapper 
            key={replyId}
            commentId={replyId} 
            replyDepthLimit={replyDepthLimit}
            parentDepth={currentDepth}
          />
        ))}
      </div>
    ) : (
      <div className="grid place-items-start border-l-brandDefault border-brandButtonOutline mt-3 px-4">
        <button 
          className="font-bold text-xs text-brandButtonInlineText tracking-wider text-left hover:underline sm:text-brandTextPrimary"
          onClick={() => setIsLoadedManually(true)}
        >
          { replyIds.length } more repl{ replyIds.length > 1 ? "ies" : "y" }
        </button>
      </div>
    )
  );
}
 
export default CommentItemReplies;