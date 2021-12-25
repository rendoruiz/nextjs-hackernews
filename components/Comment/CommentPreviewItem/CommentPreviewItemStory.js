import { useState, useEffect } from 'react';
import Link from 'next/link';

import { useShortRelativeTime } from '../../../hooks/useDate';
import { useHtmlParser } from '../../../hooks/useHtmlParser';
import ChatGlyph from '../../Glyphs/ChatGlyph';
import UserLink from '../../User/UserLink';
import UserHoverCard from '../../User/UserHoverCard';
import ShortenedExternalLink from '../../Shared/ShortenedExternalLink';
import ItemIsDeadOrDeleted from '../../StatusMessage/ItemIsDeadOrDeleted';

const CommentPreviewItemStory = ({ storyData, userId, commentTime }) => {
  const [storyText, setStoryText] = useState(null);
  const [shortRelativeTime, setShortRelativeTime] = useState(null);

  // story data title
  useEffect(() => {
    setStoryText(useHtmlParser(storyData.title));
  }, [storyData?.title])

  // comment time
  useEffect(() => {
    setShortRelativeTime(useShortRelativeTime(commentTime));
  }, [commentTime]);

  return storyData && (storyData.dead || storyData.deleted) ? <ItemIsDeadOrDeleted /> : commentTime && (
    <>
      {/* mobile time */}
      <div className="px-4 mt-2 sm:hidden">
        <p className="text-brandTextSecondary">{ shortRelativeTime }</p>
      </div>

      {/* story item preview */}
      <div className="grid text-brandTextSecondary transition-colors dark:border-brandDarkBorder dark:text-brandDarkTextSecondary sm:border-brandDefault sm:border-brandBorder sm:border-b-transparent sm:rounded-t sm:m-[-1px] sm:mb-0 sm:grid-cols-[auto,1fr] sm:items-center sm:text-xs sm:dark:border-b-transparent sm:hover:border-brandBorderHover sm:hover:dark:border-brandDarkBorderHover">
        {/* chat icon link */}
        <Link href={"/story/" + storyData.id}>
          <a 
            className="hidden pl-2 sm:grid self-stretch items-center"
            title="view story discussion"
          >
            <ChatGlyph className="w-6 h-6" />
          </a>
        </Link>

        {/* story content */}
        <div className="relative block pt-[0.375rem] px-4 sm:p-2 sm:leading-normal">
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
            className="relative hidden text-brandOrange dark:text-brandDarkTextPrimary sm:inline-block"
          />

          {/* mobile title */}
          <div className="sm:inline">
            <span className="hidden sm:inline">
              &nbsp;commented on&nbsp;
            </span>
            <div className="sm:inline sm:text-brandTextPrimary sm:dark:text-brandDarkTextPrimary">
              { storyText }
            </div>
            { storyData.url && (
              <span className="hidden mx-1 sm:inline">&nbsp;</span>
            )}
          </div>

          {/* desktop external link */}
          <ShortenedExternalLink 
            wrapperClassName="group relative hidden items-center text-brandOrange dark:text-brandOrange/90 sm:inline-flex"
            textClassName="inline-block group-hover:underline"
            glyphClassName="inline-block ml-1 w-3 h-3"
            rawLink={storyData.url}
          />

          <span className="hidden sm:inline">
            &nbsp;· Posted by&nbsp;
          </span>
          <UserHoverCard 
            className="relative hidden sm:inline-block" 
            userId={storyData.by} 
            withPrefix
          />
        </div>
      </div>
    </>  
  );
}
 
export default CommentPreviewItemStory;