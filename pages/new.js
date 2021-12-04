import { dehydrate, QueryClient } from "react-query";
import StoryView from "../components/Story/StoryView";
import { fetchNewStoryIds, useNewStoryIds } from "../hooks/useStoryIds";

const HomeNewView = () => {
  return ( 
    <StoryView 
      useHook={useNewStoryIds()} 
      activeRoute="/new"
    />
  );
}

export async function getStaticProps() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery('newstoryids', fetchNewStoryIds)
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
 
export default HomeNewView;