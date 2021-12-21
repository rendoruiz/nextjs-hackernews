import { useEffect, useState } from "react";

import { useComment } from "../../../hooks/useComment";
import StoryItem from "../../Story/StoryItem/StoryItem";
import CommentPreviewItem from "../../Comment/CommentPreviewItem/CommentPreviewItem";

const UserViewContentItemSelector = ({ contentId, contentTypeFilter }) => {
  const { data, isSuccess } = useComment(contentId);
  const [contentItem, setContentItem] = useState(null);

  // show content if filter has not been set, else return null if item type is equal to the filter
  const setContent = () => {
    if (data.type !== "comment" && (!contentTypeFilter || contentTypeFilter === "story")) {
      setContentItem(
        <StoryItem 
          storyId={contentId} 
          userView
        />
      );
    } else if (data.type === "comment" && (!contentTypeFilter || contentTypeFilter === "comment")) {
      setContentItem(
        <CommentPreviewItem commentId={contentId} />
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
  }, [contentTypeFilter]);

  return isSuccess && data && contentItem;
}
 
export default UserViewContentItemSelector;