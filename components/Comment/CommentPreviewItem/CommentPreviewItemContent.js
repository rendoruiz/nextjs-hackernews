import { useEffect, useState } from "react";
import Link from 'next/link';

import { useHtmlParser } from "../../../hooks/useHtmlParser";

const CommentPreviewItemContent = ({ commentData, parentData, storyId }) => {
  const [commentText, setCommentText] = useState(null);

  useEffect(() => {
    setCommentText(useHtmlParser(commentData.text));
  }, [commentData?.text]);

  return commentData && storyId && (  
    <div className="relative px-4 pt-1 pb-[0.625rem] sm:border-brandDefault sm:border-brandBorder sm:border-t-transparent sm:rounded-b sm:m-[-1px] sm:mt-0 sm:p-2 sm:hover:border-brandBorderHover">
      {/* wrapper link */}
      <Link href={`/story/${storyId}/${commentData.id}`}>
        <a 
          className="absolute inset-0"
          title="view comment permalink"
        />
      </Link>

      

      <div className="italic">
        { commentText ?? JSON.stringify(commentData) }
      </div>
    </div>
  );
}
 
export default CommentPreviewItemContent;