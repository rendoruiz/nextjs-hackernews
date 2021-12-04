import Link from 'next/link';

import { useFullDateTime, useRelativeTime } from "../../../hooks/useDate";

const StoryItemInfo = ({ storyData }) => {
  return (  
    <p className="text-xs text-brandTextInfo tracking-wide">
      Posted by&nbsp;
      <Link href={'/user/' + storyData.id}>
        <a 
          title="TODO: profile card on hover"
          className="hover:underline"
          onClick={(e) => e.stopPropagation()}
        >
          u/{ storyData.by }
        </a>
      </Link>
      &nbsp;
      <span 
        title={useFullDateTime(storyData.time)}
        className="hover:underline"
      >
        { useRelativeTime(storyData.time) }
      </span>
    </p>
  );
}
 
export default StoryItemInfo;