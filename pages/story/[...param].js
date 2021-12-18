import { useRouter } from "next/dist/client/router";

import CommentView from "../../components/Comment/CommentView";

const StoryPermalinkPage = () => {
  const router = useRouter();
  const { param } = router.query;

  return !param ? null : (  
    <CommentView 
      storyId={param[0]} 
      permalinkId={param[1]} 
    />
  );
}
 
export default StoryPermalinkPage;