import { useRouter } from "next/dist/client/router";

import { useUser } from "../../../hooks/useUser";
import IsLoading from "../../StatusMessage/IsLoading";
import IsError from "../../StatusMessage/IsError";
import SiteLayout from "../../SiteLayout";
import UserViewDetails from "./UserViewDetails/UserViewDetails";
import UserViewNavigationBar from "./UserViewNavigationBar";
import UserViewContentList from "./UserViewContentList";

const UserView = () => {
  const router = useRouter();
  const { userid } = router.query;
  const { isLoading, isError, data: userData, isSuccess } = useUser(userid);

  return userid && isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (  
    <SiteLayout contentClassName="md:grid-cols-[1fr,auto] md:gap-x-6">
      {/* details header (mobile)/sidebar (desktop) */}
      <UserViewDetails userData={userData} />

      {/* user submitted contents + filter nav */}
      <div className="grid grid-rows-[auto,1fr]">
        <UserViewNavigationBar userId={userData.id} />
        <UserViewContentList
          contentIds={userData.submitted}
          userId={userData.id}
        />
      </div>
    </SiteLayout>
  );
}
 
export default UserView;