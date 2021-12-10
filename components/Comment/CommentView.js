import SiteLayout from "../SiteLayout";
import StoryItem from "../Story/StoryItem/StoryItem";
import CommentList from "./CommentList";

const CommentView = ({ storyId }) => {
  return (  
    <SiteLayout contentClassName="grid-rows-[auto,auto,1fr] gap-2 sm:gap-4">
      <StoryItem 
        storyId={storyId} 
        withText 
        isStatic
      />

      <CommentList storyId={storyId} />
    </SiteLayout>
  );
}
 
export default CommentView;