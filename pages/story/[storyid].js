import { useRouter } from "next/dist/client/router";
import CommentView from "../../components/Comment/CommentView";

const StoryDiscussionPage = () => {
  const router = useRouter();
  const { storyid } = router.query;
  
  return (  
    <CommentView storyId={storyid} />
  );
}
 
export default StoryDiscussionPage;