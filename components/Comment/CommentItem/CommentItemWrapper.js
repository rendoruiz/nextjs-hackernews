import clsx from "clsx";
import { useState } from "react";

import { useComment } from "../../../hooks/useComment";
import { useHtmlParser } from "../../../hooks/useHtmlParser";
import ItemIsError from "../../StatusMessage/ItemIsError";
import CommentItemHeader from "./CommentItemHeader";
import CommentItemReplies from "./CommentItemReplies";

const CommentItemWrapper = ({ commentId, submitterId, replyDepthLimit, parentDepth = 0 }) => {
  const { isLoading, isError, data, isSuccess, error } = useComment(commentId);
  const [isCollapsed, setIsCollapsed] = useState(false);    // todo: save state locally

  const toggleDisplayState = (e) => {
    e.preventDefault();
    setIsCollapsed(!isCollapsed);
    console.log('toggled')
  }

  return isLoading ? (<IsLoading itemDepth={parentDepth} />) : isError || !data ? (<ItemIsError error={error} />) : isSuccess && (
    !data.deleted && (  
      <div className={clsx(
        "grid text-sm sm:border-none sm:px-0",
        { "opacity-60": data.dead },
        { "border-t-brandDefault border-t-brandButtonOutline px-4 pt-3 first:border-t-0 first:pt-0": parentDepth === 0 },
        { "-mb-2 last:mb-0": isCollapsed }
      )}>      
        {/* dead comment indicator */}
        { data.dead && 
          <div className="justify-self-start rounded mb-1 px-1 py-[0.125rem] bg-brandButtonOutline font-bold text-xs text-brandTextSecondary uppercase">
            dead comment
          </div>
        }

        {/* header */}
        <CommentItemHeader 
          commentData={data}
          submitterId={submitterId}
          itemDepth={parentDepth}
          toggleDisplayState={toggleDisplayState}
        />

        {/* content */}
        <div className={clsx("grid",
          parentDepth === 0 
            ? "ml-8"
            : "mt-[0.125rem]",
          { "hidden": isCollapsed }
        )}>
          {/* text */}
          <div className="inline-block">
            { useHtmlParser(data.text) }
          </div>

          {/* if there are comment replies: display if meets set condition, else display trigger to load replies */}
          <CommentItemReplies 
            replyIds={data.kids}
            replyDepthLimit={replyDepthLimit}
            parentDepth={parentDepth}
          />
        </div>

        {/* horizontal line/desktop collapse toggle */}
        <div className={clsx("hidden")}>
          <button className="hidden"></button>
        </div>
      </div>
    )
  );
}

// comment item loader
const IsLoading = ({ itemDepth }) => {
  return (
    <div className={clsx(
      "grid text-sm sm:border-none sm:px-0",
      { "border-t-brandDefault border-t-brandButtonOutline px-4 pt-3 first:border-t-0 first:pt-0": itemDepth === 0 },
    )}>
      <div className="grid grid-cols-[auto,1fr] gap-2">
        <div className={clsx(
          "rounded-full bg-brandTextSecondary/30 animate-pulse", 
          itemDepth === 0 ? "w-6 h-6" : "w-[18px] h-[18px]"
          )}/>
        <div className="flex items-center">
          <div className="rounded-md w-10 h-3 bg-brandTextSecondary/30 animate-pulse" />
          <div className="rounded-md ml-2 w-5 h-3 bg-brandTextSecondary/30 animate-pulse" />
        </div>
      </div>
      
      <div className={clsx("grid", itemDepth === 0 ? "ml-8" : "mt-[0.125rem]")}>
        <div className="grid gap-1">
          <div className="rounded-md w-10/12 h-4 bg-brandTextSecondary/30 animate-pulse" />
          <div className="rounded-md w-full h-4 bg-brandTextSecondary/30 animate-pulse" />
          <div className="rounded-md w-3/4 h-4 bg-brandTextSecondary/30 animate-pulse" />
        </div>
      </div>
    </div>
  );
}
 
export default CommentItemWrapper;