import clsx from "clsx";
import { useEffect, useState } from "react";

import { useComment } from "../../../hooks/useComment";
import { useHtmlParser } from "../../../hooks/useHtmlParser";
import ItemIsError from "../../StatusMessage/ItemIsError";
import CommentItemHeader from "./CommentItemHeader";
import CommentItemFooter from "./CommentItemFooter";
import CommentItemReplies from "./CommentItemReplies";
import CommentItemLoader from "./CommentItemLoader";

const CommentItem = ({ commentId, submitterId, storyId, replyDepthLimit, parentDepth = 0, isPermalink = false }) => {
  const { isLoading, isError, data, isSuccess, error } = useComment(commentId);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [textContent, setTextContent] = useState(false);

  const toggleDisplayState = (e) => {
    e.preventDefault();
    setIsCollapsed(!isCollapsed);
  }

  useEffect(() => {
    if (data?.text) {
      setTextContent(useHtmlParser(data.text));
    }
  }, [data?.text]);

  return isLoading ? (<CommentItemLoader itemDepth={parentDepth} /> ) : isError || !data ? (<ItemIsError error={error} />) : isSuccess && (
    !data.deleted && (  
      <div className={clsx(
        "relative grid text-sm sm:grid-cols-[auto,1fr] sm:gap-x-2 sm:last:pb-0",
        { "border-t-brandDefault border-t-brandButtonOutline px-4 py-3 transition-colors first:border-t-0 first:pt-0 dark:border-t-brandDarkBorder sm:border-none sm:px-2": parentDepth === 0 },
        { "py-3 first:pt-3 sm:py-2 sm:first:pt-2": isPermalink },
      )}>    
        {/* permalink highlight */}
        { isPermalink && (
          <div className="absolute inset-0 row-start-1 row-span-2 rounded -my-3 bg-brandOrange/5 dark:bg-brandDarkButton/5 sm:col-span-2 sm:-my-2" />
        )}

        {/* header */}
        <CommentItemHeader 
          commentData={data}
          submitterId={submitterId}
          storyId={storyId}
          itemDepth={parentDepth}
          isDead={data.dead}
          toggleDisplayState={toggleDisplayState}
          isCollapsed={isCollapsed}
        />

        {/* vertical line - desktop collapse toggle */}
        <div className={clsx(
          "relative hidden row-span-2 col-start-1 w-7 overflow-hidden",
          { "sm:!grid": !isCollapsed },
        )}>
          <button 
            className="group grid justify-center mx-[6px]"
            title="collapse comment item"
            onClick={(e) => toggleDisplayState(e)}
          >
            <div className="border-r-2 border-r-brandButtonOutline mt-2 h-full transition-colors dark:border-r-brandDarkBorder group-hover:border-brandOrange" />
          </button>
        </div>

        {/* content + actions */}
        <div className={clsx(
          "relative grid sm:col-start-2 sm:ml-0 sm:mt-0",
          parentDepth === 0 ? "ml-8" : "mt-1",
          { "!hidden": isCollapsed },
        )}>
          {/* text */}
          <div className={clsx(
            "inline-block leading-tight sm:leading-normal",
            { "opacity-60": data.dead }
          )}>
            { textContent ?? (
              <div className="text-xs2 uppercase font-bold text-brandTextSecondary italic dark:text-brandDarkTextSecondary">
                (empty content)
              </div>
            )}
          </div>

          {/* desktop dropdown button */}
          <CommentItemFooter 
            commentData={data} 
            storyId={storyId}
            isDead={data.dead}
          />
        </div>

        {/* if there are comment replies: display if meets set condition, else display trigger to load replies */}
        <div className={clsx(
          "relative grid sm:col-start-2",
          { "!hidden": isCollapsed },
          { "mt-3 sm:mt-0": isPermalink },
          { "mb-1 sm:mb-0": parentDepth === 0 }
        )}>
          <CommentItemReplies 
            replyIds={data.kids}
            replyDepthLimit={replyDepthLimit}
            parentDepth={parentDepth}
            submitterId={submitterId}
            storyId={storyId}
          />
        </div>
      </div>
    )
  );
}
 
export default CommentItem;