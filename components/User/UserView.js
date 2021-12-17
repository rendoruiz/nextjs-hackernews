import SiteLayout from "../SiteLayout";

const StoryView = ({ userId }) => {
  return (  
    <SiteLayout>
      <div>
        {userId}
      </div>
    </SiteLayout>
  );
}
 
export default StoryView;