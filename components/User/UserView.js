import { useUser } from "../../hooks/useUser";
import SiteLayout from "../SiteLayout";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import UserContentList from "./UserContent/UserContentList";
import UserDetails from "./UserDetails";
import UserNavigationBar from "./UserNavigationBar";

const StoryView = ({ userId }) => {
  const { isLoading, isError, data, isSuccess } = useUser(userId);

  return isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (  
    <SiteLayout contentClassName="md:grid-cols-[1fr,auto] md:gap-x-6">
      <UserDetails userData={data} />
      <div>
        <UserNavigationBar userId={data.id} />
        <UserContentList userData={data} /> 
      </div>
    </SiteLayout>
  );
}
 
export default StoryView;