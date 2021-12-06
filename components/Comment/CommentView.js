import { useRouter } from "next/dist/client/router";
import SiteLayout from "../SiteLayout";
import StoryItemWrapper from "../Story/StoryItem/StoryItemWrapper";

const CommentView = ({ storyId }) => {
  const router = useRouter();

  return (  
    <SiteLayout>
      <StoryItemWrapper storyId={storyId} />
    </SiteLayout>
  );
}
 
export default CommentView;