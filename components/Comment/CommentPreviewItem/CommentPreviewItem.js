import { useState, useEffect } from "react";

import { useComment } from "../../../hooks/useComment";
import CommentPreviewItemContent from "./CommentPreviewItemContent";
import CommentPreviewItemStory from "./CommentPreviewItemStory";

const CommentPreviewItem = ({ commentId }) => {
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
    <div className="grid bg-white text-sm leading-snug sm:border-brandBorder sm:rounded sm:shadow-sm">
      <CommentPreviewItemStory
        storyData={parentStory}
        commentTime={comment.time}
      />

      <CommentPreviewItemContent
        commentData={comment}
        parentData={parentComment}
        storyId={parentStory.id}
      />
      {/* <div className="break-all">
        <h2 className="font-medium text-sm uppercase">story:</h2> 
        <p>{ JSON.stringify(parentStory) }</p>
      </div> */}
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
  );
}

const IsLoading = () => {
  return (
    <div className="px-4 py-2 bg-white sm:border-brandBorder sm:rounded sm:shadow-sm">
      <p className="font-medium text-sm uppercase text-red-500">Loading comment...</p>
    </div>
  );
}
 
export default CommentPreviewItem;