import { useEffect, useState } from "react";
import { useComment } from "../../../hooks/useComment";
import StoryItem from "../../Story/StoryItem/StoryItem";

const UserContentItem = ({ contentId, restrictedContent }) => {
  const { data, isSuccess } = useComment(contentId);
  const [contentItem, setContentItem] = useState(null);

  const setContent = () => {
    if (data.type === "comment" && restrictedContent !== "comment") {
      setContentItem(
        <div>this is a comment</div>
      );
    } else if (data.type !== "comment" && restrictedContent !== "story") {
      setContentItem(
        <StoryItem storyId={contentId} />
      );
    } else {
      setContentItem(null);
    }
  }

  // run once - when content item is still not been set
  useEffect(() => {
    if (data && !contentItem) {
      setContent();
    }
  }, [data]);

  // run everytime - when restrictedContent has changed only if content item has already been set.
  useEffect(() => {
    if (contentItem) {
      setContent();
    }
  }, [restrictedContent]);

  return isSuccess && data && contentItem;
}
 
export default UserContentItem;