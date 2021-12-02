import Link from 'next/link';

import { useFullDateTime, useRelativeTime } from "../../../hooks/useDate";
import TimeTooltip from '../../Shared/TimeTooltip';
import UserHoverCard from '../../User/UserHoverCard';

const StoryItemInfo = ({ storyData }) => {
  return (  
    <p className="text-xs text-brandTextInfo tracking-wide">
      Posted by&nbsp;
      <UserHoverCard 
        userId={storyData.by} 
        withPrefix
      />
      &nbsp;
      <TimeTooltip 
        unixTime={storyData.time} 
        contentId={storyData.id} 
      />
    </p>
  );
}
 
export default StoryItemInfo;