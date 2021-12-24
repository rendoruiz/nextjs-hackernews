import UserAvatar from "../../UserAvatar";
import UserLink from "../../UserLink";
import UserViewDetailsAboutExpander from "./UserViewDetailsAboutExpander";
import UserViewDetailsStats from "./UserViewDetailsStats";

const UserViewDetails = ({ userData }) => {
  return (  
    <div className="self-start grid content-start pt-3 bg-brandObjectBackground transition-colors overflow-hidden dark:bg-brandDarkAppBackground sm:hidden md:grid md:order-2 md:rounded md:pt-0 md:w-[250px] md:dark:bg-brandDarkObjectBackground bp960:w-[310px]">
    {/* desktop header background */}
    <div className="hidden h-[94px] bg-brandOrange/60 md:block" />

    {/* avatar */}
    <div className="grid justify-items-center transition-colors md:justify-items-start md:border-x-brandDefault md:border-brandBorder md:py-0 md:dark:border-brandDarkBorder">
      <div className="flex md:rounded-md md:-mt-16 md:ml-[10px] md:p-1 md:bg-brandObjectBackground">
        <UserAvatar 
          userId={userData.id} 
          className=" w-16 h-16 text-4xl md:rounded md:w-20 md:h-20 md:text-5xl"
        />
      </div>
    </div>

    {/* details */}
    <div className="grid border-b-brandDefault border-brandBorder px-4 pb-3 text-sm text-center text-brandTextPrimary transition-colors cursor-default dark:border-b-brandDarkBorder dark:text-brandDarkTextPrimary md:gap-2 md:border-brandDefault md:border-t-0 md:rounded md:rounded-t-none md:px-3 md:pb-5 md:text-left md:dark:border-brandDarkBorder">
      {/* name */}
      <h2 className="font-medium text-2xl leading-normal md:text-xs">
        <UserLink 
          userId={userData.id} 
          withPrefix 
        />
      </h2>

      {/* stats */}
      <UserViewDetailsStats userData={userData} />

      {/* about */}
      <UserViewDetailsAboutExpander rawHtmlString={userData.about} />
      
      {/* hackernews link */}
      <a 
        href={"https://news.ycombinator.com/user?id=" + userData.id}
        target="_blank"
        className="justify-self-center rounded-full mt-1 px-5 py-[0.375rem] bg-brandOrange/90 font-bold text-xs text-white text-center leading-none uppercase transition-opacity hover:opacity-80 active:opacity-60 md:justify-self-stretch md:mt-5 md:text-sm md:normal-case md:dark:bg-brandDarkButton md:dark:text-brandTextPrimary"
      >
        View on Y Combinator
      </a>
    </div>
  </div>
  );
}
 
export default UserViewDetails;