import clsx from "clsx";

import { useShortRelativeTime } from "../../../hooks/useDate";
import CommentItemMobileOverflowModal from "./CommentItemMobileOverflowModal";
import UserAvatar from "../../User/UserAvatar";
import UserLink from "../../User/UserLink";
import MicrophoneGlyph from "../../Glyphs/MicrophoneGlyph";
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

const CommentItemHeader = ({ commentData, submitterId, itemDepth, toggleDisplayState }) => {
  return (  
    <div className="grid grid-cols-[auto,1fr] gap-2 text-brandTextPrimary">
      <UserAvatar 
        userId={commentData.by} 
        className={itemDepth === 0 ? "w-6 h-6" : "w-[18px] h-[18px]"}
      />
      
      <div className="grid grid-cols-[auto,1fr,auto] items-center text-xs">
        <div className={clsx(
          "flex font-bold sm:font-medium", 
          { "text-brandOrange sm:text-brandTextPrimary": commentData.by === submitterId }
        )}>
          <UserLink userId={commentData.by} />
          
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

        <button 
          className="text-left sm:hidden"
          onClick={(e) => toggleDisplayState(e)}
        >
          &nbsp;&nbsp;
          { useShortRelativeTime(commentData.time) }
        </button>

        <CommentItemMobileOverflowModal commentData={commentData} />
      </div>
    </div>
  );
}
 
export default CommentItemHeader;