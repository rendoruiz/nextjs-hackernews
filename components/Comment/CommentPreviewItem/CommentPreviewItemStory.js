import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useShortRelativeTime } from '../../../hooks/useDate';
import { useHtmlParser } from '../../../hooks/useHtmlParser';
import ChatGlyph from '../../Glyphs/ChatGlyph';
import UserLink from '../../User/UserLink';
import UserHoverCard from '../../User/UserHoverCard';

const CommentPreviewItemStory = ({ storyData, userId, commentTime }) => {
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
      <div className="grid text-brandTextSecondary sm:grid-cols-[auto,1fr] sm:items-center sm:text-xs">
        {/* chat icon link */}
        <Link href={"/story/" + storyData.id}>
          <a 
            className="hidden pl-2 sm:grid place-items-center"
            title="view story discussion"
          >
            <ChatGlyph className="w-6 h-6" />
          </a>
        </Link>

        {/* story content */}
        <div className="relative block pt-[0.375rem] px-4 sm:p-2">
          {/* wrapper link */}
          <Link href={'/story/' + storyData.id}>
            <a 
              className="absolute inset-0" 
              title="view story discussion" 
            />
          </Link>

          {/* desktop userview user id */}
          <UserLink 
            userId={userId} 
            className="relative hidden text-brandOrange sm:inline-block"
          />

          {/* mobile title */}
          <div className="sm:inline-block sm:text-brandTextPrimary">
            <span className="hidden sm:inline-block">
              &nbsp;commented on&nbsp;
            </span>
            { storyText }
            
          </div>

          <span className="hidden sm:inline-block">
            &nbsp;· Posted by&nbsp;
          </span>
          <UserHoverCard 
            className="hidden sm:inline-block" 
            userId={userId} 
            withPrefix
          />
        </div>
      </div>
    </>  
  );
}
 
export default CommentPreviewItemStory;