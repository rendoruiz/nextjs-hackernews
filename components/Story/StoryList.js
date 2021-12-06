import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import StoryItemWrapper from "./StoryItem/StoryItemWrapper";

const StoryList = ({ useHook, itemLimit }) => {
  const { isLoading, isError, data, isSuccess } = useHook;

  return !itemLimit || isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (  
    <div className="grid content-start gap-1 sm:gap-3">
    {
      [...data].slice(0, itemLimit).map((itemId) => 
        <StoryItemWrapper
          key={itemId}
          storyId={itemId}
        />
      )
    }
    </div>
  );
}
 
export default StoryList;