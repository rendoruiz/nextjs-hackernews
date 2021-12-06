import { dehydrate, QueryClient } from "react-query";
import StoryView from "../components/Story/StoryView";
import { fetchBestStoryIds, useBestStoryIds } from "../hooks/useStoryIds";

const StoryListBestPage = () => {
  return ( 
    <StoryView 
      useHook={useBestStoryIds()} 
      activeRoute="/best"
    />
  );
}

// for precaching
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('beststoryids', fetchBestStoryIds)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
 
export default StoryListBestPage;