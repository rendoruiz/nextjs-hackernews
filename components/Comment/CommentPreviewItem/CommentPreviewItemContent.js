import { useEffect, useState } from "react";
import Link from 'next/link';

import { useHtmlParser } from "../../../hooks/useHtmlParser";

const CommentPreviewItemContent = ({ commentData, parentData, storyId }) => {
  const [commentText, setCommentText] = useState(null);

  useEffect(() => {
    setCommentText(useHtmlParser(commentData.text));
  }, [commentData?.text]);

  return commentData && storyId && (  
    <div className="relative px-4 pt-1 pb-[0.625rem]">
      {/* wrapper link */}
      <Link href={`/story/${storyId}/${commentData.id}`}>
        <a 
          className="absolute inset-0"
          title="view story discussion"
        />
      </Link>

      <div className="italic">
        { commentText }
      </div>
    </div>
  );
}
 
export default CommentPreviewItemContent;