import TimeTooltip from '../../Shared/TimeTooltip';
import UserAvatar from '../../User/UserAvatar';
import UserHoverCard from '../../User/UserHoverCard';
import UserLink from '../../User/UserLink';

const StoryItemHeader = ({ storyData }) => {
  return (  
    <p className="flex items-center relative text-sm text-brandTextInfo sm:text-xs sm:tracking-wide">
      <UserAvatar  
        className="inline-block mr-[0.375rem] sm:hidden"
        userId={storyData.by}
      /> 
      <UserLink
        className="font-medium text-brandTextPrimary sm:hidden"
        userId={storyData.by}
      />
      <span className="hidden sm:inline-block">Posted by&nbsp;</span>
      <span className="hidden sm:inline-block">
        <UserHoverCard 
          userId={storyData.by} 
          withPrefix
        />
      </span>
      &nbsp;
      <span className="sm:hidden">•&nbsp;</span>
      <TimeTooltip 
        unixTime={storyData.time} 
        contentId={storyData.id} 
      />
    </p>
  );
}
 
export default StoryItemHeader;