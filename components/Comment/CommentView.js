import SiteLayout from "../SiteLayout";
import StoryItemWrapper from "../Story/StoryItem/StoryItemWrapper";
import CommentList from "./CommentList";

const CommentView = ({ storyId }) => {
  return (  
    <SiteLayout contentClassName="grid-rows-[auto,auto,1fr] gap-5">
      <StoryItemWrapper storyId={storyId} />

      <CommentList storyId={storyId} />
    </SiteLayout>
  );
}
 
export default CommentView;