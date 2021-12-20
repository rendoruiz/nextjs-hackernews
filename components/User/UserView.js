import { useRouter } from "next/dist/client/router";

import { useUser } from "../../hooks/useUser";
import SiteLayout from "../SiteLayout";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import UserDetails from "./UserDetails/UserDetails";
import UserContentNavigationBar from "./UserContent/UserContentNavigationBar";
import UserContentList from "./UserContent/UserContentList";

const UserView = () => {
  const router = useRouter();
  const { userid } = router.query;
  const { isLoading, isError, data: userData, isSuccess } = useUser(userid);

  return userid && isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (  
    <SiteLayout contentClassName="md:grid-cols-[1fr,auto] md:gap-x-6">
      {/* details header (mobile)/sidebar (desktop) */}
      <UserDetails userData={userData} />

      {/* user submitted contents + filter nav */}
      <div className="grid grid-rows-[auto,1fr]">
        <UserContentNavigationBar userId={userData.id} />
        <UserContentList
          contentIds={userData.submitted}
          userId={userData.id}
        />
      </div>
    </SiteLayout>
  );
}
 
export default UserView;