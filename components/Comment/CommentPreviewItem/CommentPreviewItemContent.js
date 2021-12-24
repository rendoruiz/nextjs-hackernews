import { useEffect, useState } from "react";
import Link from 'next/link';

import { useHtmlParser } from "../../../hooks/useHtmlParser";
import CommentPreviewItemContentDesktop from "./CommentPreviewItemContentDesktop";

const CommentPreviewItemContent = ({ commentData, parentData, storyId }) => {
  const [commentText, setCommentText] = useState(null);
  const [parentCommentText, setParentCommentText] = useState(null);

  useEffect(() => {
    setParentCommentText(useHtmlParser(parentData?.text));
  }, [parentData?.text])

  useEffect(() => {
    setCommentText(useHtmlParser(commentData.text));
  }, [commentData?.text]);

  return commentData && storyId && (  
    <>
      {/* mobile */}
      <div className="relative px-4 pt-1 pb-[0.625rem] sm:hidden">
        <Link href={`/story/${storyId}/${commentData.id}`}>
          <a 
            className="absolute inset-0"
            title="view comment permalink"
          />
        </Link>
        <div className="text-brandTextPrimary italic dark:text-brandDarkTextPrimary">
          { commentText }
        </div>
      </div>
      
      {/* desktop */}
      <CommentPreviewItemContentDesktop 
        commentData={commentData} 
        parentData={parentData}
        storyId={storyId}
        permalinkId={commentData.id}
        commentText={commentText}
        parentCommentText={parentCommentText}
        isRoot
      />
    </>
  );
}
 
export default CommentPreviewItemContent;