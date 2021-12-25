import { useRouter } from "next/dist/client/router";
import Head from 'next/head';

import { useUser } from "../../../hooks/useUser";
import IsLoading from "../../StatusMessage/IsLoading";
import IsError from "../../StatusMessage/IsError";
import SiteLayout from "../../SiteLayout";
import UserViewDetails from "./UserViewDetails/UserViewDetails";
import UserViewNavigationBar from "./UserViewNavigationBar";
import UserViewContentList from "./UserViewContentList";
import { useEffect } from "react";

const UserView = () => {
  const router = useRouter();
  const { userid } = router.query;
  const { isLoading, isError, data: userData, isSuccess } = useUser(userid);
  

  useEffect(() => {
    console.log({userData})
  })

  return userid && isLoading ? (<Loader isLoading />) : (isError || !userData) ? (<Loader isError />) : isSuccess && userData && (  
    <>
      { console.log({userData})}
      <Head>
        <title>{userData.id} (u/{userData.id}) - Hacker News</title>
        <meta property="og:title" content={`${userData.id} (u/${userData.id}) - Hacker News`} />
      </Head>

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
    </>
  );
}

const Loader = ({ isError = false, isLoading = false }) => {
  return (isError || isLoading) && (
    <SiteLayout contentClassName="!grid-rows-1 !place-items-center">
      { isLoading ? (<IsLoading />) : isError && (<IsError />) }
    </SiteLayout>
  );
}
 
export default UserView;