import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

import { useCountQueryString } from "../../hooks/useCountQueryString";
import { useStory } from "../../hooks/useStory";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import CommentItemWrapper from "./CommentItem/CommentItemWrapper";

const CommentList = ({ storyId }) => {
  const { isLoading, isError, data: storyData, isSuccess } = useStory(storyId);
  const [itemCount, setItemCount] = useState(null);
  const replyDepthLimit = 3;
  const defaultCount = 10;

  useEffect(() => {
    setItemCount(useCountQueryString(defaultCount));
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setItemCount(storyData.kids.length);
  }

  return isLoading ? (<IsLoading />) : isError || !storyData ? (<IsError />) : isSuccess && (  
    <div className="grid content-start gap-3 py-1 bg-white sm:border-brandDefault sm:border-brandBorder sm:rounded sm:p-3 sm:shadow-sm">
      <div className="px-4 sm:hidden">
        <span className="font-bold text-xs">
          { storyData.descendants === 0 ? "No" : storyData.descendants } Comment{ storyData.descendants !== 1 && "s" }
        </span>
      </div>

      <div className="group grid content-start gap-5">
        { storyData.kids &&
          [...storyData.kids].slice(0, itemCount).map((commentId) => (
            <CommentItemWrapper
              key={commentId}
              commentId={commentId}
              submitterId={storyData.by}
              replyDepthLimit={replyDepthLimit}
            />
          ))
        }
      </div>

      {/* load more comments trigger */}
      { storyData.kids.length > itemCount && (
        <div>
          <button
            className="font-bold text-xs text-brandButtonInlineText tracking-wider text-left hover:underline sm:text-brandTextPrimary"
            onClick={(e) => handleClick(e)}
          >
            Show all { storyData.kids.length - itemCount} comments
          </button>
        </div>
      )}
    </div>
  );
}
 
export default CommentList;