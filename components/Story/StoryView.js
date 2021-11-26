import SiteLayout from "../SiteLayout";
import StoryList from "./StoryList";
import StoryNav from "./StoryNav";

const StoryView = ({ useHook, activeRoute }) => {
  return ( 
    <SiteLayout>
      <StoryNav activeRoute={activeRoute} />

      <StoryList useHook={useHook} />
    </SiteLayout>
  );
}
 
export default StoryView;