import { dehydrate, QueryClient } from "react-query";
import StoryView from "../components/Story/StoryView";
import { fetchTopStoryIds, useTopStoryIds } from "../hooks/useStoryIds";

const HomeIndexView = () => {
  return ( 
    <StoryView 
      useHook={useTopStoryIds()} 
      activeRoute="/"
    />
  );
}

// for precaching
export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('topstoryids', fetchTopStoryIds)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
 
export default HomeIndexView;