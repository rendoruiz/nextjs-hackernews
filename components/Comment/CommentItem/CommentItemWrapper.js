
import clsx from "clsx";
import { useComment } from "../../../hooks/useComment";
import { useHtmlParser } from "../../../hooks/useHtmlParser";
import ItemIsError from "../../StatusMessage/ItemIsError";
import CommentItemHeader from "./CommentItemHeader";
import CommentItemReplies from "./CommentItemReplies";

const CommentItemWrapper = ({ commentId, submitterId, replyDepthLimit, parentDepth = 0 }) => {
  const { isLoading, isError, data, isSuccess, error } = useComment(commentId);

  return isLoading ? (<IsLoading />) : isError || !data ? (<ItemIsError error={error} />) : isSuccess && (
    !data.deleted && (  
      <div className={clsx(
        "grid text-sm",
        { "opacity-60": data.dead },
        { "border-t-brandDefault border-t-brandButtonOutline px-4 pt-2 first:border-t-0 first:pt-0": parentDepth === 0 },
      )}>      
        {/* dead comment indicator */}
        { data.dead && 
          <div className="col-span-2 justify-self-start rounded px-1 py-[0.125rem] bg-brandButtonOutline font-bold text-xs text-brandTextSecondary uppercase">
            dead comment
          </div>
        }

        {/* header */}
        <CommentItemHeader 
          commentData={data}
          submitterId={submitterId}
          itemDepth={parentDepth}
        />

        {/* content */}
        <div className={clsx("grid",
          parentDepth === 0 
            ? "ml-8"
            : "mt-[0.125rem]"
        )}>
          {/* text */}
          <div className="grid gap-2 sm:gap-3">
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
const IsLoading = () => {
  return (
    <div className="grid sm:grid-cols-[40px,1fr] sm:border-brandDefault sm:border-brandBorder sm:rounded">
      <div className="hidden sm:flex justify-center items-start py-2 bg-white/80">
        <div className="rounded-md w-3/4 h-3 bg-brandTextSecondary/30 animate-pulse"></div>
      </div>
      <div className="grid gap-3 items-start bg-white px-4 pt-2 pb-3 sm:p-2">
        <div className="flex items-center">
          <div className="rounded-full mr-[0.375rem] w-6 h-6 bg-brandTextSecondary/30 animate-pulse"></div>
          <div className="rounded-md w-1/2 h-4 bg-brandTextSecondary/30 animate-pulse sm:w-5/12"></div>
        </div>
        <div className="rounded-md w-10/12 h-5 bg-brandTextSecondary/30 animate-pulse sm:w-3/4"></div>
        <div className="rounded-md w-1/2 h-5 bg-brandTextSecondary/30 animate-pulse sm:h-4 sm:w-1/3"></div>
        <div className="mt-[0.375rem] flex sm:mt-0">
          <div className="rounded-md w-20 h-5 bg-brandTextSecondary/30 animate-pulse sm:w-28"></div>
          <div className="rounded-md ml-2 w-14 h-5 bg-brandTextSecondary/30 animate-pulse sm:w-28"></div>
        </div>
      </div>
    </div>
  );
}
 
export default CommentItemWrapper;