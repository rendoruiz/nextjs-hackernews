import SiteLayout from "../SiteLayout";
import StoryItem from "../Story/StoryItem/StoryItem";
import CommentList from "./CommentList";

const CommentView = ({ storyId, permalinkId }) => {
  return (  
    <SiteLayout contentClassName="grid-rows-[auto,auto,1fr] gap-2 sm:gap-4">
      <StoryItem 
        storyId={storyId} 
        withText 
        isStatic
      />

      <CommentList 
        storyId={storyId} 
        permalinkId={permalinkId} 
      />
    </SiteLayout>
  );
}
 
export default CommentView;