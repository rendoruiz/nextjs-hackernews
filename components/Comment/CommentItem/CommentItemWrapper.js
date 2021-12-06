import { useComment } from "../../../hooks/useComment";
import { useHtmlParser } from "../../../hooks/useHtmlParser";

const CommentItemWrapper = ({ commentId }) => {
  const { isLoading, isError, data, isSuccess } = useComment(commentId);

  return isSuccess && (  
    <div className="text-sm">
      { data.dead && <p className="text-red-500">dead comment</p>}
      <div className="grid gap-2">
        { useHtmlParser(data.text) }
      </div>
    </div>
  );
}
 
export default CommentItemWrapper;