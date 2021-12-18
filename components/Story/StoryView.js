import SiteLayout from "../SiteLayout";
import StoryNavigationBar from "./StoryNavigationBar";
import StoryList from "./StoryList";

const StoryView = ({ useHook }) => {
  return ( 
    <SiteLayout contentClassName="grid-rows-[auto,1fr,auto]">
      {/* Navbar */}
      <StoryNavigationBar />

      {/* Stories */}
      <StoryList useHook={useHook} />
    </SiteLayout>
  );
}

export default StoryView;