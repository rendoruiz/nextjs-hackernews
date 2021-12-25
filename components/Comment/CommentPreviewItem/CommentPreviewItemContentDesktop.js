import Link from 'next/link';
import clsx from "clsx";

import TimeTooltip from "../../Shared/TimeTooltip";
import UserHoverCard from "../../User/UserHoverCard";
import CommentItemFooter from "../CommentItem/CommentItemFooter";

const CommentPreviewItemContentDesktop = ({ commentData, parentData, storyId, permalinkId, commentText, parentCommentText, isRoot }) => {
  const isHighlighted = (!isRoot && commentData) || (isRoot && !parentData) ? true : false;

  return (
    <div className={clsx(
      "hidden sm:grid grid-cols-[auto,1fr]",
      { "border-brandDefault border-brandBorder border-t-transparent rounded-b m-[-1px] mt-0 p-2 transition-colors dark:border-brandDarkBorder dark:border-t-transparent hover:border-brandBorderHover hover:dark:border-brandDarkBorderHover": isRoot },
    )}>
      {/* vertical line */}
      <PermalinkRoute 
        storyId={storyId} 
        permalinkId={permalinkId} 
        className={clsx(
          "grid",
          isRoot ? "mr-2 px-[0.6875rem]" : "mr-4"
        )}
      >
        <div className="border-l-2 border-l-brandButtonOutline border-dashed transition-colors dark:border-brandDarkBorder" />
      </PermalinkRoute>

      {/* comment data */}
      <div className={clsx(
        "relative grid content-start",
        { "rounded px-2 pt-[6px] pb-1 bg-brandOrange/5 transition-colors dark:bg-brandDarkButton/5": isHighlighted },
      )}>
        {/* wrapper link */}
        <PermalinkRoute 
          storyId={storyId} 
          permalinkId={permalinkId} 
        />

        {/* header */}
        <div className="justify-self-start relative text-xs text-brandTextSecondary dark:text-brandDarkTextSecondary">
          <UserHoverCard 
            userId={parentData?.by ?? commentData.by} 
            className="inline-block text-brandTextPrimary dark:text-brandDarkTextPrimary"
          />
          <span className="tracking-widest">
            &nbsp;·&nbsp;
          </span>
          <TimeTooltip 
            unixTime={parentData?.time ?? commentData.time} 
            contentId={`${storyId}/${parentData?.id ?? commentData?.id}`} 
            openNewTab
          />
        </div>

        {/* content */}
        <div className={clsx(
          "relative mt-1 text-brandTextPrimary dark:text-brandDarkTextPrimary",
          { "mb-3": parentData && isRoot },
          { "pr-1": isRoot }
        )}>
          <PermalinkRoute 
            storyId={storyId} 
            permalinkId={permalinkId} 
          />
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

const PermalinkRoute = ({ children, className, storyId, permalinkId }) => {
  return (
    <Link href={`/story/${storyId}/${permalinkId}`}>
      <a 
        className={className ?? "absolute inset-0"}
        title="view comment permalink"
      >
        { children }
      </a>
    </Link>
  );
}
 
export default CommentPreviewItemContentDesktop;