import clsx from 'clsx';

import ShareDropdown from '../../Shared/ShareDropdown';
import OverflowDropdown from '../../Shared/OverflowDropdown';

const CommentItemFooter = ({ commentData, storyId, isDead, className }) => {
  return (  
    <div className={clsx(
      className ?? "mt-3 mb-1",
      "hidden sm:grid grid-flow-col auto-cols-auto justify-start items-center gap-1 text-xs text-brandTextSecondary",
      { "opacity-60": isDead }
    )}>
      {/* share dropdown */}
      <ShareDropdown
        itemData={commentData}
        storyId={storyId}
        triggerClassName="-ml-1 p-1"
      />

      {/* overflow dropdown */}
      <OverflowDropdown 
        itemData={commentData} 
        triggerClassName="p-1"
      />
    </div>
  );
}
 
export default CommentItemFooter;