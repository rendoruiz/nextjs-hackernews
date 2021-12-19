import UserContentList from "./UserContentList";
import UserContentNavigationBar from "./UserContentNavigationBar";

const UserContent = ({ userData }) => {
  return (  
    <div>
      <UserContentNavigationBar userId={userData.id} />
      <UserContentList userData={userData} />
    </div>
  );
}
 
export default UserContent;