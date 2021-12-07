import { useStory } from "../../hooks/useStory";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import CommentItemWrapper from "./CommentItem/CommentItemWrapper";

const CommentList = ({ storyId }) => {
  const { isLoading, isError, data: storyData, isSuccess } = useStory(storyId);
  const itemLimit = 10;
  const replyDepthLimit = 3;

  return isLoading ? (<IsLoading />) : isError || !storyData ? (<IsError />) : isSuccess && (  
    <div className="grid content-start gap-3 py-1 bg-white sm:border-brandDefault sm:border-brandBorder sm:rounded sm:p-3 sm:shadow-sm">
      <div className="px-4 sm:hidden">
        <span className="font-bold text-xs">
          { storyData.descendants === 0 ? "No" : storyData.descendants } Comment{ storyData.descendants !== 1 && "s" }
        </span>
      </div>

      <div className="group grid content-start gap-5">
        { storyData.kids &&
          [...storyData.kids].slice(0, itemLimit).map((commentId) => (
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
    </div>
  );
}
 
export default CommentList;