import { useRouter } from "next/dist/client/router";
import { useUser } from "../../hooks/useUser";
import SiteLayout from "../SiteLayout";
import IsError from "../StatusMessage/IsError";
import IsLoading from "../StatusMessage/IsLoading";
import UserDetails from "./UserDetails/UserDetails";
import UserContent from "./UserContent/UserContent";

const UserView = () => {
  const router = useRouter();
  const { userid } = router.query;
  const { isLoading, isError, data, isSuccess } = useUser(userid);

  return userid && isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (  
    <SiteLayout contentClassName="md:grid-cols-[1fr,auto] md:gap-x-6">
      {/* details header (mobile)/sidebar (desktop) */}
      <UserDetails userData={data} />

      {/* user submitted contents */}
      <UserContent userData={data} />
    </SiteLayout>
  );
}
 
export default UserView;