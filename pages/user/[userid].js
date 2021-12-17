import { useRouter } from "next/dist/client/router";
import UserView from "../../components/User/UserView";

const UserPage = () => {
  const router = useRouter();
  const { userid } = router.query;

  return (  
    <UserView userId={userid} />
  );
}
 
export default UserPage;