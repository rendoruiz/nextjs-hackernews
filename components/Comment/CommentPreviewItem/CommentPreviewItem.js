import { useState, useEffect } from "react";

import { useComment } from "../../../hooks/useComment";
import CommentPreviewItemContent from "./CommentPreviewItemContent";
import CommentPreviewItemStory from "./CommentPreviewItemStory";

const CommentPreviewItem = ({ commentId, userId }) => {
  const [contentId, setContentId] = useState(commentId)
  const { data } = useComment(contentId)
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

  return !parentStory ? <IsLoading /> : (  
    comment.deleted ? <DeletedItem /> : (
    <div className="grid bg-white text-sm leading-snug sm:border-brandBorder sm:rounded sm:shadow-sm">
      {/* story */}
      <CommentPreviewItemStory
        storyData={parentStory}
        userId={userId}
        commentTime={comment.time}
      />

      {/* comment and/or parent comment */}
      <CommentPreviewItemContent
        commentData={comment}
        parentData={parentComment}
        storyId={parentStory.id}
      />
      {/* { parentComment && (
        <div className="break-all">
          <h2 className="font-medium text-sm uppercase">parent comment:</h2> 
          <p>{ JSON.stringify(parentComment) }</p>
        </div>
      )}
      <div className="break-all">
        <h2 className="font-medium text-sm uppercase">comment:</h2> 
        <p>{ JSON.stringify(comment) }</p>
      </div> */}
    </div>
  ));
}

const IsLoading = () => {
  return (
    <div className="px-4 py-2 bg-white sm:border-brandBorder sm:rounded sm:shadow-sm">
      <p className="font-medium text-sm uppercase text-red-500">Loading comment...</p>
    </div>
  );
}

const DeletedItem = () => {
  return (
    <div className="py-1 px-2 font-medium text-xs text-brandTextSecondary italic sm:py-0">
      Content cannot be found. Comment status is dead or deleted.
    </div>
  )
}
 
export default CommentPreviewItem;