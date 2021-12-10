import SiteLayout from "../SiteLayout";
import StoryNav from "./StoryNav";
import StoryList from "./StoryList";

const StoryView = ({ useHook }) => {
  return ( 
    <SiteLayout contentClassName="grid-rows-[auto,1fr,auto]">
      {/* Navbar */}
      <StoryNav />

      {/* Stories */}
      <StoryList useHook={useHook} />
    </SiteLayout>
  );
}

export default StoryView;