import UserContentList from "./UserContentList";
import UserContentNavigationBar from "./UserContentNavigationBar";

const UserContent = ({ userData }) => {
  console.log({userData})
  return (  
    <div className="grid grid-rows-[auto,1fr]">
      <UserContentNavigationBar userId={userData.id} />
      <UserContentList 
        contentIds={userData.submitted} 
        userId={userData.id}
      />
    </div>
  );
}
 
export default UserContent;