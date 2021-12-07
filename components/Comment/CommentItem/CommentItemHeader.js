import clsx from "clsx";
import { useShortRelativeTime } from "../../../hooks/useDate";
import UserAvatar from "../../User/UserAvatar";
import UserLink from "../../User/UserLink";
import CommentItemMobileOverflowModal from "./CommentItemMobileOverflowModal";

const CommentItemHeader = ({ commentData, submitterId, itemDepth }) => {
  return (  
    <div className="grid grid-cols-[auto,1fr] gap-2">
      <UserAvatar 
        userId={commentData.by} 
        className={itemDepth === 0 ? "w-6 h-6" : "w-5 h-5"}
      />
      
      <div className="grid grid-cols-[auto,1fr,auto] items-center text-xs">
        <UserLink 
          userId={commentData.by} 
          className="font-medium"
        />

        <button className="text-left sm:hidden">
          &nbsp;&nbsp;
          { useShortRelativeTime(commentData.time) }
        </button>

        <CommentItemMobileOverflowModal commentData={commentData} />
      </div>
    </div>
  );
}
 
export default CommentItemHeader;