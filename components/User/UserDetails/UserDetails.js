import UserAvatar from "../UserAvatar";
import UserLink from "../UserLink";
import UserDetailsAboutExpander from "./UserDetailsAboutExpander";
import UserDetailsStats from "./UserDetailsStats";

const UserDetails = ({ userData }) => {
  return (  
    <div className="grid content-start pt-3 bg-white overflow-hidden sm:hidden md:grid md:order-2 md:rounded md:pt-0 md:w-[250px] bp960:w-[310px]">
    {/* desktop header background */}
    <div className="hidden h-[94px] bg-brandOrange/60 md:block" />

    {/* avatar */}
    <div className="grid justify-items-center md:justify-items-start md:border-x-brandDefault md:border-brandBorder md:py-0">
      <div className="flex md:rounded-md md:-mt-16 md:ml-[10px] md:p-1 md:bg-white">
        <UserAvatar 
          userId={userData.id} 
          className=" w-16 h-16 text-4xl md:rounded md:w-20 md:h-20 md:text-5xl"
        />
      </div>
    </div>

    {/* details */}
    <div className="grid border-b-brandDefault border-brandBorder px-4 pb-3 text-sm text-center cursor-default md:gap-2 md:border-brandDefault md:border-t-0 md:rounded md:rounded-t-none md:px-3 md:pb-5 md:text-left">
      {/* name */}
      <h2 className="font-medium text-2xl leading-normal md:text-xs">
        <UserLink 
          userId={userData.id} 
          withPrefix 
        />
      </h2>

      {/* stats */}
      <UserDetailsStats userData={userData} />

      {/* about */}
      <UserDetailsAboutExpander rawHtmlString={userData.about} />
      
      {/* hackernews link */}
      <a 
        href={"https://news.ycombinator.com/user?id=" + userData.id}
        target="_blank"
        className="justify-self-center rounded-full mt-1 px-5 py-[0.375rem] bg-brandOrange/90 font-bold text-xs text-white text-center uppercase transition-opacity hover:opacity-80 active:opacity-60 md:justify-self-stretch md:mt-5 md:text-sm md:normal-case"
      >
        View on Y Combinator
      </a>
    </div>
  </div>
  );
}
 
export default UserDetails;