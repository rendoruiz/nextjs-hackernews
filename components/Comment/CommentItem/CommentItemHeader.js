import { useEffect, useState } from "react";
import clsx from "clsx";
import * as Tooltip from '@radix-ui/react-tooltip';

import { useShortRelativeTime } from "../../../hooks/useDate";
import TimeTooltip from "../../Shared/TimeTooltip";
import MobileActionsModal from "../../Shared/MobileActionsModal";
import UserLink from "../../User/UserLink";
import UserAvatar from "../../User/UserAvatar";
import UserHoverCard from "../../User/UserHoverCard";
import MicrophoneGlyph from "../../Glyphs/MicrophoneGlyph";
import ExpandGlyph from "../../Glyphs/ExpandGlyph";

const CommentItemHeader = ({ commentData, submitterId, storyId, itemDepth, isDead = false, toggleDisplayState, isCollapsed }) => {
  const [shortRelativeTime, setShortRelativeTime] = useState(null);

  useEffect(() => {
    setShortRelativeTime(useShortRelativeTime(commentData.time));
  }, [commentData.time]);

  return (  
    <div className={clsx(
      "relative grid grid-cols-[auto,1fr] gap-x-2 text-brandTextPrimary dark:text-brandDarkTextPrimary sm:col-span-2 sm:gap-0",
      { "opacity-60": isDead },
    )}>
      {/* dead comment indicator */}
      { isDead && (
        <div className="col-span-2 justify-self-start rounded mb-1 px-1 py-[0.125rem] bg-brandButtonOutline font-bold text-xs2 text-brandTextSecondary uppercase sm:col-span-2">
          Dead Comment
        </div>
      )}

      {/* mobile user avatar */}
      <UserAvatar 
        userId={commentData.by} 
        className={clsx(itemDepth === 0 ? "w-6 h-6 text-xs2" : "w-[18px] h-[18px] text-xs3", "sm:hidden")}
      />

      {/* desktop expand toggle */}
      <button 
        className={clsx(
          "hidden sm:grid place-items-center w-7 h-7 text-brandOrange transition-all duration-200",
          isCollapsed ? "max-w-xs mr-1" : "max-w-0"
        )}
        title="expand comment item"
        onClick={(e) => toggleDisplayState(e)}
      >
        <ExpandGlyph className="w-4 h-4" />
      </button>
      
      <div className="grid grid-cols-[auto,1fr,auto] items-center text-xs sm:auto-cols-auto">
        <div className={clsx(
          "flex items-center font-bold sm:font-medium", 
          { "text-brandOrange sm:text-brandTextPrimary sm:dark:text-brandDarkTextPrimary": commentData.by === submitterId }
        )}>
          {/* mobile user link */}
          <UserLink 
            userId={commentData.by} 
            className="sm:hidden"
          />

          {/* desktop user hovercard */}
          <UserHoverCard 
            userId={commentData.by} 
            withAvatar
            className="hidden sm:flex items-center font-medium"
            avatarClassName="mr-2 w-7 h-7 text-base"
          />
          
          {/* original poster indicator */}
          { commentData.by === submitterId && (
            <>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <span className="hidden sm:block ml-1 font-bold text-brandOrange cursor-default">
                    OP
                  </span>
                </Tooltip.Trigger>
                <Tooltip.Content
                  className="rounded px-2 py-[2px] bg-black font-medium text-xs text-white"
                  side="top"
                  sideOffset={4}
                >
                  <span>Original Poster</span>
                  <Tooltip.Arrow className="my-[-0.5px] text-black fill-current" />
                </Tooltip.Content>
              </Tooltip.Root>
              
              <MicrophoneGlyph 
                className="ml-1 w-4 h-4 text-brandOrange dark:bg-brandDarkAppBackground sm:hidden" 
                title="original poster indicator"
              />
            </>
          )}
        </div>

        {/* mobile time + mobile collapse/expand toggle */}
        <button 
          className="text-left sm:hidden"
          onClick={(e) => toggleDisplayState(e)}
        >
          &nbsp;&nbsp;
          { shortRelativeTime }
        </button>

        {/* desktop time tooltip */}
        <div className="hidden sm:block text-brandTextSecondary sm:tracking-wide">
          <span className="tracking-widest">
            &nbsp;·&nbsp;
          </span>
          <TimeTooltip
            unixTime={commentData.time}
            contentId={`${storyId}/${commentData.id}`}
            isComment
            openNewTab
          />
        </div>
        
        <MobileActionsModal 
          itemData={commentData} 
          storyId={storyId}
          triggerClassName="-mr-2 -my-2 p-2 sm:hidden"
        />
      </div>
    </div>
  );
}
 
export default CommentItemHeader;