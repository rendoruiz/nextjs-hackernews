import { useComment } from "../../../hooks/useComment";
import StoryItem from "../../Story/StoryItem/StoryItem";

const UserContentItem = ({ contentId }) => {
  const { data, isSuccess } = useComment(contentId);

  const setContent = (contentType, contentId) => {
    if (contentType === "comment") {
      return (
        <div>this is a comment</div>
      )
    } else {
      return (<StoryItem storyId={contentId} />)
    }
  }

  return isSuccess && data && setContent(data.type, data.id);
}
 
export default UserContentItem;