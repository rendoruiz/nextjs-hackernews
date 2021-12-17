import { useState, useEffect } from "react";

import { useFullDateTime, useRelativeTime } from "../../hooks/useDate";
import { useHtmlParser } from "../../hooks/useHtmlParser";
import CakeGlyph from "../Glyphs/CakeGlyph";
import StarGlyph from "../Glyphs/StarGlyph";
import UserAvatar from "./UserAvatar";

const UserDetails = ({ userData }) => {
  const [relativeTime, setRelativeTime] = useState(null);
  const [fullDateTime, setFullDateTime] = useState(null);
  const [textContent, setTextContent] = useState(null);

  useEffect(() => {
    if (userData) {
      setRelativeTime(useRelativeTime(userData.created, false));
      setFullDateTime(useFullDateTime(userData.created, true));
      if (userData.about) {
        setTextContent(useHtmlParser(userData.about));
      }
    }
  }, [userData]);

  return (  
    <div className="grid content-start py-2 bg-white overflow-hidden md:order-2 md:rounded md:py-0 md:w-[310px]">
      {/* desktop header background */}
      <div className="hidden h-[94px] bg-brandOrange/50 md:block" />

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
      <div className="grid text-center px-4 pb-1 text-sm md:gap-2 md:border-brandDefault md:border-brandBorder md:border-t-0 md:rounded md:rounded-t-none md:px-3 md:pb-5 md:text-left">
        {/* name */}
        <h2 className="font-medium text-2xl leading-normal md:mt-1 md:text-xs">
          u/{ userData.id }
        </h2>

        {/* mobile stats */}
        <div className="flex flex-wrap justify-center font-extralight md:hidden">
          <div>
            <span className="font-bold">{ userData.karma }</span>
            <span> karma</span>
          </div>
          <div>
            <span className="mx-1">•</span>
            <span className="font-bold">{ relativeTime }</span>
            <span> on Hacker News</span>
          </div>
        </div>

        {/* desktop stats */}
        <div className="hidden md:grid grid-cols-2">
          <div className="grid gap-1">
            <span className="font-medium">Karma</span>
            <div className="flex items-center">
              <StarGlyph className="w-4 h-4 text-brandOrange" />
              <span className="ml-1 text-xs text-brandTextSecondary">
                { userData.karma }
              </span>
            </div>
          </div>
          <div className="grid gap-1">
            <span className="font-medium">Cake day</span>
            <div className="flex items-center">
              <CakeGlyph className="w-4 h-4 text-brandOrange" />
              <span className="ml-1 text-xs text-brandTextSecondary">
                { fullDateTime }
              </span>
            </div>
          </div>
        </div>

        {/* notes */}
        { textContent && (
          <div className="hidden md:grid gap-1 mt-1">
            <span className="font-medium">About</span>
            <p className="text-xs break-words">
              { textContent }
            </p>
          </div>
        )}
        
        {/* hackernews link */}
        <a 
          href={"https://news.ycombinator.com/user?id=" + userData.id}
          target="_blank"
          className="justify-self-center rounded-full mt-2 px-5 py-[0.375rem] bg-brandOrange/90 font-bold text-xs text-white text-center uppercase transition-opacity hover:opacity-80 active:opacity-60 md:justify-self-stretch md:mt-5 md:text-sm md:normal-case"
        >
          View on Y Combinator
        </a>
      </div>
    </div>
  );
}
 
export default UserDetails;