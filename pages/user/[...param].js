import { useRouter } from "next/dist/client/router";

import UserView from "../../components/User/UserView";

const UserPage = () => {
  const router = useRouter();
  const { param } = router.query;

  return !param ? null : param[0] && (  
    <UserView 
      userId={param[0]}
    />
  );
}
 
export default UserPage;