import clsx from "clsx";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

import { useShortRelativeTime } from "../../../hooks/useDate";
import CommentItemMobileOverflowModal from "./CommentItemMobileOverflowModal";
import UserAvatar from "../../User/UserAvatar";
import UserLink from "../../User/UserLink";
import MicrophoneGlyph from "../../Glyphs/MicrophoneGlyph";
import UserHoverCard from "../../User/UserHoverCard";
import TimeTooltip from "../../Shared/TimeTooltip";

const CommentItemHeader = ({ commentData, submitterId, itemDepth, isDead = false, toggleDisplayState }) => {
  return (  
    <div className={clsx(
      "grid grid-cols-[auto,1fr] gap-2 text-brandTextPrimary sm:tracking-wide",
      { "opacity-60": isDead }
    )}>
      <UserAvatar 
        userId={commentData.by} 
        className={clsx(itemDepth === 0 ? "w-6 h-6" : "w-[18px] h-[18px]", "sm:hidden")}
      />
      
      <div className="grid grid-cols-[auto,1fr,auto] items-center text-xs">
        <div className={clsx(
          "flex font-bold sm:font-medium", 
          { "text-brandOrange sm:text-brandTextPrimary": commentData.by === submitterId }
        )}>
          <UserLink 
            userId={commentData.by} 
            className="sm:hidden"
          />
          <UserHoverCard 
            userId={commentData.by} 
            withAvatar
            className="hidden sm:flex items-center"
            avatarClassName="mr-2 w-7 h-7"
          />
          
          { commentData.by === submitterId && (
            <>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="hidden sm:block font-bold text-brandOrange cursor-default">
                    &nbsp;OP
                  </span>
                </TooltipTrigger>
                <TooltipContent
                  className="rounded px-2 py-[2px] bg-black font-medium text-xs text-white"
                  side="top"
                  sideOffset={4}
                >
                  <span>Original Poster</span>
                  <TooltipArrow className="my-[-0.5px] text-black fill-current" />
                </TooltipContent>
              </Tooltip>
              
              <MicrophoneGlyph 
                className="ml-1 w-4 h-4 text-brandOrange sm:hidden" 
                title="original poster indicator"
              />
            </>
          )}
        </div>

        {/* mobile time + collapse toggle */}
        <button 
          className="text-left sm:hidden"
          onClick={(e) => toggleDisplayState(e)}
        >
          &nbsp;&nbsp;
          { useShortRelativeTime(commentData.time) }
        </button>

        {/* desktop time tooltip */}
        <div className="hidden sm:block text-brandTextSecondary">
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