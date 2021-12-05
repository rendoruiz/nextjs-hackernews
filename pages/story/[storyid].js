import { useRouter } from "next/dist/client/router";
import SiteLayout from "../../components/SiteLayout";

const StoryDiscussionPage = () => {
  const router = useRouter();
  const { storyid } = router.query;
  console.log({storyid})
  return (  
    <SiteLayout>
      <span>{storyid}</span>
    </SiteLayout>
  );
}
 
export default StoryDiscussionPage;