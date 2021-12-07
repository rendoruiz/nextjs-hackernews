import { useStory } from "../../hooks/useStory";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import CommentItemWrapper from "./CommentItem/CommentItemWrapper";

const CommentList = ({ storyId }) => {
  const { isLoading, isError, data: storyData, isSuccess } = useStory(storyId);
  const itemLimit = 2;
  const replyDepthLimit = 3;

  return isLoading ? (<IsLoading />) : isError || !storyData ? (<IsError />) : isSuccess && (  
    <div className="grid content-start gap-5 bg-white sm:border-brandDefault sm:border-brandBorder sm:rounded sm:p-3 sm:shadow-sm">
      <div className="sm:hidden">
        <span className="font-medium text-sm">{!storyData.kids ? "No" : storyData.kids.length} Comments</span>
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
    </div>
  );
}
 
export default CommentList;