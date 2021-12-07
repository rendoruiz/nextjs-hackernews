import { useState } from "react/cjs/react.development";
import CommentItemWrapper from "./CommentItemWrapper";

const CommentItemReplies = ({ replyIds, replyDepthLimit, parentDepth }) => {
  const [isLoadedManually, setIsLoadedManually] = useState(false);
  const currentDepth = parentDepth + 1;

  // console.log({parentDepth},{currentDepth},{replyDepthLimit},currentDepth < replyDepthLimit)

  return !replyIds ? null : replyIds.length <= 0 ? null : (
    (currentDepth < replyDepthLimit) || isLoadedManually ? (
      <div className="grid gap-5 ml-5 mt-5">
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
      <button 
        className="font-bold text-xs text-brandButtonInlineText text-left hover:underline"
        onClick={() => setIsLoadedManually(true)}
      >
        { replyIds.length } more repl{ replyIds.length > 1 ? "ies" : "y" }
      </button>
    )
  );
}
 
export default CommentItemReplies;