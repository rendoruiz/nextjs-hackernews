import SiteLayout from "../SiteLayout";
import StoryItemWrapper from "../Story/StoryItem/StoryItemWrapper";
import CommentList from "./CommentList";

const CommentView = ({ storyId }) => {
  return (  
    <SiteLayout contentClassName="grid-rows-[auto,auto,1fr] gap-4">
      <StoryItemWrapper 
        storyId={storyId} 
        withText 
      />

      {/* <CommentList storyId={storyId} /> */}
    </SiteLayout>
  );
}
 
export default CommentView;