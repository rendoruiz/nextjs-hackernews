import StoryItemLayout from "./StoryItem/StoryItemLayout";

const StoryList = ({ useHook, itemLimit = 20 }) => {
  const { isLoading, isError, data, isSuccess } = useHook;

  return isSuccess && (  
    <div className="grid content-start gap-3">
    {
      [...data].slice(0, itemLimit).map((itemId) => 
        <StoryItemLayout
          key={itemId}
          storyId={itemId}
        />
      )
    }
    </div>
  );
}


 
export default StoryList;