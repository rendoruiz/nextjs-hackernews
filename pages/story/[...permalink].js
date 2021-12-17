import { useRouter } from "next/dist/client/router";
import CommentView from "../../components/Comment/CommentView";

const StoryPermalinkPage = () => {
  const router = useRouter();
  const { permalink } = router.query;

  return !permalink ? null : (  
    <CommentView 
      storyId={permalink[0]} 
      permalinkId={permalink[1]} 
    />
  );
}
 
export default StoryPermalinkPage;