import { useState, useEffect } from "react";
import * as Tooltip from '@radix-ui/react-tooltip';

import { useFullDateTime, useRelativeTime } from "../../hooks/useDate";
import { useHtmlParser } from "../../hooks/useHtmlParser";
import { useNumberFormatter } from "../../hooks/useNumberFormatter";
import CakeGlyph from "../Glyphs/CakeGlyph";
import PlusGlyph from "../Glyphs/PlusGlyph";
import StarGlyph from "../Glyphs/StarGlyph";
import UserAvatar from "./UserAvatar";
import UserLink from "./UserLink";

const UserDetails = ({ userData }) => {
  const [relativeTime, setRelativeTime] = useState(null);
  const [relativeTimeWithSuffix, setRelativeTimeWithSuffix] = useState(null);
  const [fullDateTime, setFullDateTime] = useState(null);
  const [textContent, setTextContent] = useState(null);
  const [karma, setKarma] = useState(null);
  const [submissions, setSubmissions] = useState(null);

  useEffect(() => {
    if (userData) {
      setRelativeTime(useRelativeTime(userData.created, false));
      setRelativeTimeWithSuffix(useRelativeTime(userData.created));
      setFullDateTime(useFullDateTime(userData.created, true));
      setKarma(useNumberFormatter(userData.karma));
      setSubmissions(!userData.submitted ? "0" :  useNumberFormatter(userData.submitted.length));
      if (userData.about) {
        setTextContent(useHtmlParser(userData.about));
      }
    }
  }, [userData]);

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

        {/* mobile stats */}
        <div className="flex flex-wrap justify-center mb-2 font-extralight leading-tight md:hidden">
          <div>
            <span className="font-bold">{ karma }</span>
            <span> karma</span>
          </div>
          <div>
            <span className="mx-1">•</span>
            <span className="font-bold">{ relativeTime }</span>
            <span> on Hacker News</span>
          </div>
        </div>

        {/* desktop stats */}
        <div className="hidden md:grid bp960:grid-cols-2 gap-y-3 tracking-wide">
          <div className="grid gap-1">
            <span className="font-medium">Karma</span>
            <div className="flex items-center">
              <StarGlyph className="w-4 h-4 text-brandOrange/80" />
              <span className="ml-1 text-xs text-brandTextSecondary">
                { karma }
              </span>
            </div>
          </div>
          <div className="grid gap-1 order-3 bp960:order-none">
            <span className="font-medium">Cake day</span>
            <div className="flex items-center">
              <CakeGlyph className="w-4 h-4 text-brandOrange/80" />
              <CakeDayTooltip tooltip={relativeTimeWithSuffix}>
                <span className="ml-1 text-xs text-brandTextSecondary">
                  { fullDateTime }
                </span>
              </CakeDayTooltip>
            </div>
          </div>
          <div className="grid gap-1">
            <span className="font-medium">Submissions</span>
            <div className="flex items-center">
              <PlusGlyph className="w-4 h-4 text-brandOrange/80" />
              <span className="ml-1 text-xs text-brandTextSecondary">
                { submissions }
              </span>
            </div>
          </div>
        </div>

        {/* about */}
        <AboutExpander textContent={textContent} />
        
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

const CakeDayTooltip = ({ children, tooltip }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        { children }
      </Tooltip.Trigger>
      <Tooltip.Content 
        className="rounded px-2 py-1 bg-black font-medium text-xs text-white"
        side="bottom"
        sideOffset={5}
      >
        <span>{ tooltip }</span>
        <Tooltip.Arrow className="my-[-0.5px] text-black fill-current" />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}

const AboutExpander = ({ textContent }) => {
  const [isExpanded, setIsExpanded] = useState(null);

  return !textContent ? null : (
    <div className="grid gap-1 mt-1 mb-3 md:mb-0">
      <span className="hidden md:block tracking-wide font-medium">About</span>
      <div className="font-light text-xs break-words overflow-hidden md:font-normal">
        { textContent }
      </div>
    </div>
  );
}
 
export default UserDetails;