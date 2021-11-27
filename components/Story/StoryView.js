import SiteLayout from "../SiteLayout";
import StoryList from "./StoryList";
import StoryNav from "./StoryNav";

const StoryView = ({ useHook, activeRoute }) => {
  return ( 
    <SiteLayout contentClassName="grid-rows-[auto,1fr]">
      {/* Navbar */}
      <StoryNav activeRoute={activeRoute} />

      {/* Stories */}
      <StoryList useHook={useHook} />
    </SiteLayout>
  );
}
 
export default StoryView;