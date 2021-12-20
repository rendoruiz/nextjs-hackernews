import { useState, useEffect } from "react";
import { useComment } from "../../../hooks/useComment";

const UserContentCommentPreview = ({ commentId }) => {
  const [contentId, setContentId] = useState(commentId)
  const { data, isLoading, isError, isSuccess } = useComment(contentId)
  const [parentComment, setParentComment] = useState(null);
  const [parentStory, setParentStory] = useState(null);
  const [comment, setComment] = useState(null);

  // set user comment
  useEffect(() => {
    // set user comment
    if (data && !parentStory) {
      if (!comment) {
        setComment(data);
        setContentId(null);
        setContentId(data.parent);
      } else if (comment && !parentComment && !parentStory && data.id !== comment.id) {
        if (data.type === "comment") {
          setParentComment(data);
          setContentId(null);
          setContentId(data.parent);
        } else {
          setParentStory(data);
        }
      } else if (comment && parentComment && !parentStory && data.id !== parentComment.id) {
        if (data.type !== "comment") {
          setParentStory(data);
        } else {
          setContentId(null);
          setContentId(data.parent);
        }
      }
    }
  }, [contentId, data]);

  return !parentStory ? null : (  
    <div className="bg-white sm:border-brandBorder sm:rounded sm:shadow-sm">
      <div className="break-all">
        <h2 className="font-medium text-sm uppercase">story:</h2> 
        <p>{ JSON.stringify(parentStory) }</p>
      </div>
      { parentComment && (
        <div className="break-all">
          <h2 className="font-medium text-sm uppercase">parent comment:</h2> 
          <p>{ JSON.stringify(parentComment) }</p>
        </div>
      )}
      <div className="break-all">
        <h2 className="font-medium text-sm uppercase">comment:</h2> 
        <p>{ JSON.stringify(comment) }</p>
      </div>
    </div>
  );
}
 
export default UserContentCommentPreview;