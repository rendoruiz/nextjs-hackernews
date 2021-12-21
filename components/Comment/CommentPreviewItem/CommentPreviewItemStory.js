import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useShortRelativeTime } from '../../../hooks/useDate';
import { useHtmlParser } from '../../../hooks/useHtmlParser';

const CommentPreviewItemStory = ({ storyData, commentTime }) => {
  const [storyText, setStoryText] = useState(null);
  const [shortRelativeTime, setShortRelativeTime] = useState(null);

  useEffect(() => {
    setStoryText(useHtmlParser(storyData.title));
  }, [storyData?.title])

  useEffect(() => {
    setShortRelativeTime(useShortRelativeTime(commentTime));
  }, [commentTime]);

  return storyData && commentTime && (
    <>
      {/* mobile time */}
      <div className="px-4 mt-2 sm:hidden">
        <p className="text-brandTextSecondary">{ shortRelativeTime }</p>
      </div>

      {/* story item preview */}
      <div className="relative pt-[0.375rem] px-4">
        {/* wrapper link */}
        <Link href={"/story/" + storyData.id}>
          <a 
            className="absolute inset-0"
            title="view story discussion"
          />
        </Link>

        <div className="text-brandTextSecondary">
          { storyText }
        </div>
      </div>
    </>  
  );
}
 
export default CommentPreviewItemStory;