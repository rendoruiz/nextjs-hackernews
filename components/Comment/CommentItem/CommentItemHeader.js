import clsx from "clsx";

import { useShortRelativeTime } from "../../../hooks/useDate";
import CommentItemMobileOverflowModal from "./CommentItemMobileOverflowModal";
import UserAvatar from "../../User/UserAvatar";
import UserLink from "../../User/UserLink";

const CommentItemHeader = ({ commentData, submitterId, itemDepth, toggleDisplayState }) => {
  return (  
    <div className="grid grid-cols-[auto,1fr] gap-2">
      <UserAvatar 
        userId={commentData.by} 
        className={itemDepth === 0 ? "w-6 h-6" : "w-[18px] h-[18px]"}
      />
      
      <div className="grid grid-cols-[auto,1fr,auto] items-center text-xs">
        <div className="flex font-medium">
          <UserLink 
            userId={commentData.by} 
            className=""
          />
          
          { commentData.by !== submitterId && (
            <span>OP</span>
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