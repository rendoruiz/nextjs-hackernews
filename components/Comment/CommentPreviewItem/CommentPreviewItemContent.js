import { useEffect, useState } from "react";
import Link from 'next/link';
import clsx from "clsx";

import { useHtmlParser } from "../../../hooks/useHtmlParser";
import CommentItemFooter from "../CommentItem/CommentItemFooter";
import TimeTooltip from "../../Shared/TimeTooltip";
import UserHoverCard from "../../User/UserHoverCard";

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
        <div className="italic">
          { commentText }
        </div>
      </div>

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

const CommentPreviewItemContentDesktop = ({ commentData, parentData, storyId, permalinkId, commentText, parentCommentText, isRoot }) => {
  const isHighlighted = (!isRoot && commentData) || (isRoot && !parentData) ? true : false;

  return (
    <div className={clsx(
      "hidden sm:grid grid-cols-[auto,1fr]",
      { "border-brandDefault border-brandBorder border-t-transparent rounded-b m-[-1px] mt-0 p-2 transition-colors hover:border-brandBorderHover": isRoot },
    )}>
      {/* vertical line */}
      <Link href={`/story/${storyId}/${permalinkId}`}>
        <a 
          className={clsx(
            "grid",
            isRoot ? "mr-2 px-[0.6875rem]" : "mr-4"
          )}
          title="view comment permalink"
        >
          <div className="border-l-2 border-l-brandButtonOutline border-dashed" />
        </a>
      </Link>

      {/* comment data */}
      <div className={clsx(
        "relative grid content-start",
        { "rounded px-2 pt-[6px] pb-1 bg-brandOrange/10": isHighlighted },
      )}>
        {/* wrapper link */}
        <Link href={`/story/${storyId}/${permalinkId}`}>
          <a 
            className="absolute inset-0"
            title="view comment permalink"
          />
        </Link>

        {/* header */}
        <div className="justify-self-start relative text-xs text-brandTextSecondary">
          <UserHoverCard 
            userId={parentData?.by ?? commentData.by} 
            className="inline-block text-brandTextPrimary"
          />
          <span className="tracking-widest">
            &nbsp;·&nbsp;
          </span>
          <TimeTooltip unixTime={parentData?.time ?? commentData.time} />
        </div>

        {/* content */}
        <div className={clsx(
          "mt-1",
          { "mb-3": parentData && isRoot },
          { "pr-1": isRoot }
        )}>
          { parentCommentText ?? commentText }
        </div>

        {/* footer */}
        { !parentData ? (
          <CommentItemFooter 
            commentData={commentData}
            storyId={storyId}
            className="relative mt-[6px]"
          />
        ) : (
          <CommentPreviewItemContentDesktop 
            commentData={commentData}
            storyId={storyId}
            permalinkId={permalinkId}
            commentText={commentText}
          />
        )}
      </div>
    </div>
  )
}
 
export default CommentPreviewItemContent;