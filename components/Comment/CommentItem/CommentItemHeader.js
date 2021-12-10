import clsx from "clsx";
import * as Tooltip from '@radix-ui/react-tooltip';

import { useShortRelativeTime } from "../../../hooks/useDate";
import CommentItemMobileOverflowModal from "./CommentItemMobileOverflowModal";
import UserAvatar from "../../User/UserAvatar";
import UserLink from "../../User/UserLink";
import MicrophoneGlyph from "../../Glyphs/MicrophoneGlyph";
import ExpandGlyph from "../../Glyphs/ExpandGlyph";
import UserHoverCard from "../../User/UserHoverCard";
import TimeTooltip from "../../Shared/TimeTooltip";

const CommentItemHeader = ({ commentData, submitterId, itemDepth, isDead = false, toggleDisplayState, isCollapsed }) => {
  return (  
    <div className={clsx(
      "grid grid-cols-[auto,1fr] gap-2 text-brandTextPrimary sm:col-span-2 sm:gap-0",
      { "opacity-60": isDead }
    )}>
      {/* mobile user avatar */}
      <UserAvatar 
        userId={commentData.by} 
        className={clsx(itemDepth === 0 ? "w-6 h-6" : "w-[18px] h-[18px]", "sm:hidden")}
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
          "flex font-bold sm:font-medium", 
          { "text-brandOrange sm:text-brandTextPrimary": commentData.by === submitterId }
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
            avatarClassName="mr-2 w-7 h-7"
          />
          
          {/* original poster indicator */}
          { commentData.by === submitterId && (
            <>
              <Tooltip.Root>
                <Tooltip.Trigger asChild>
                  <span className="hidden sm:block font-bold text-brandOrange cursor-default">
                    &nbsp;OP
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
                className="ml-1 w-4 h-4 text-brandOrange sm:hidden" 
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
          { useShortRelativeTime(commentData.time) }
        </button>

        {/* desktop time tooltip */}
        <div className="hidden sm:block text-brandTextSecondary sm:tracking-wide">
          &nbsp;•&nbsp;
          <TimeTooltip
            unixTime={commentData.time}
            contentId={commentData.id}
            isComment
          />
        </div>

        <CommentItemMobileOverflowModal commentData={commentData} />
      </div>
    </div>
  );
}
 
export default CommentItemHeader;