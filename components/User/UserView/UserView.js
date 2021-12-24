import { useRouter } from "next/dist/client/router";
import Head from 'next/head';

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
    <>
      <Head>
        <title>{userData.id} (u/{userData.id}) - Hacker News</title>
        <meta property="og:title" content={`${userData.id} (u/${userData.id}) - Hacker News`} />
      </Head>

      <SiteLayout contentClassName="transition-colors dark:bg-brandDarkObjectBackground md:grid-cols-[1fr,auto] md:gap-x-6 sm:dark:bg-transparent">
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
    </>
  );
}
 
export default UserView;