import { useState, useEffect } from "react";

import { useComment } from "../../../hooks/useComment";
import CommentPreviewItemStory from "./CommentPreviewItemStory";
import CommentPreviewItemContent from "./CommentPreviewItemContent";

const CommentPreviewItem = ({ commentId, userId }) => {
  const [contentId, setContentId] = useState(commentId)
  const { data, isLoading } = useComment(contentId)
  const [parentComment, setParentComment] = useState(null);
  const [parentStory, setParentStory] = useState(null);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    // run indefinitely until parent story has been set
    if (data && !parentStory) {
      // assign comment, parentComment and/or parentStory
      if (!comment) {
        setComment(data);
      } else if (comment && !parentComment && !parentStory && data.id !== comment.id) {
        if (data.type === "comment") {
          setParentComment(data);
        } else {
          setParentStory(data);
        }
      } else if (comment && parentComment && !parentStory && data.id !== parentComment.id) {
        if (data.type !== "comment") {
          setParentStory(data);
        } 
      }
      // refetch data
      setContentId(null);
      setContentId(data.parent);
    }
  }, [contentId, data]);

  return !comment && isLoading ? <IsLoading heading="comment" /> : (!parentComment || !parentStory) && isLoading ? <IsLoading heading="parent story/comment" /> : parentStory && (  
    comment.deleted ? <DeletedItem /> : (
    <div className="grid content-start bg-brandObjectBackground text-sm leading-snug transition-colors dark:bg-brandDarkAppBackground sm:border-brandDefault sm:border-brandBorder sm:rounded sm:shadow-sm sm:hover:cursor-pointer sm:dark:border-brandDarkBorder sm:dark:bg-brandDarkObjectBackground">
      {/* story */}
      <CommentPreviewItemStory
        storyData={parentStory}
        userId={userId}
        commentTime={comment.time}
      />

      {/* desktop border */}
      <div className="hidden mx-2 mb-[-2px] border-t-2 border-t-brandButtonOutline transition-colors dark:border-t-brandDarkBorder sm:block"></div>

      {/* comment and/or parent comment */}
      <CommentPreviewItemContent
        commentData={comment}
        parentData={parentComment}
        storyId={parentStory.id}
      />
    </div>
  ));
}

const IsLoading = ({ heading }) => {
  return (
    <div className="px-4 py-2 bg-brandObjectBackground dark:bg-brandDarkAppBackground sm:border-brandBorder  sm:rounded sm:shadow-sm sm:dark:border-brandDarkBorder sm:dark:bg-brandDarkObjectBackground">
      <p className="font-medium text-sm uppercase text-red-500">Loading { heading }...</p>
    </div>
  );
}

const DeletedItem = () => {
  return (
    <div className="py-1 px-2 font-medium text-xs text-brandTextSecondary italic dark:text-brandDarkTextSecondary sm:py-0">
      Content cannot be found. Comment status is dead or deleted.
    </div>
  )
}
 
export default CommentPreviewItem;