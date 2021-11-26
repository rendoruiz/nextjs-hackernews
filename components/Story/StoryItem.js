import { useStory } from "../../hooks/useStory";

const StoryItem = ({ storyId }) => {
  const { isLoading, isError, data, isSuccess } = useStory(storyId);

  return ( 
    <div className="grid break-words  overflow-hidden">
      <p>{ storyId }</p>
      <p>{ isLoading && <span>Loading</span> }</p>
      <p>{ isError && <span>Error</span> }</p>
      <p>{ isSuccess && <span>Success</span> }</p>
      <p className="  ">{ data && JSON.stringify(data) }</p>

    </div>
  );
}
 
export default StoryItem;