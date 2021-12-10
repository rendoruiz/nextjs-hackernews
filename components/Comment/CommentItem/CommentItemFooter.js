import ShareDropdown from '../../Shared/ShareDropdown';
import OverflowDropdown from '../../Shared/OverflowDropdown';

const CommentItemFooter = ({ commentData }) => {
  return (  
    <div className="hidden sm:grid grid-flow-col auto-cols-auto justify-start items-center gap-1 my-1 text-xs text-brandTextSecondary">
      {/* share dropdown */}
      <ShareDropdown
        itemData={commentData}
        route="comment"
        toggleClassName="-ml-1 px-1 py-2"
      />

      {/* overflow dropdown */}
      <OverflowDropdown 
        itemData={commentData} 
        className="p-1"
      />
    </div>
  );
}
 
export default CommentItemFooter;