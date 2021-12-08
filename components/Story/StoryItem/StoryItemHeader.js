import TimeRoute from '../../Shared/TimeRoute';
import TimeTooltip from '../../Shared/TimeTooltip';
import UserAvatar from '../../User/UserAvatar';
import UserHoverCard from '../../User/UserHoverCard';
import UserLink from '../../User/UserLink';

const StoryItemHeader = ({ storyData }) => {
  return !storyData ? null : (  
    <p className="relative row-start-1 col-start-1 flex items-center text-sm text-brandTextInfo sm:row-start-auto sm:col-start-auto sm:text-xs sm:tracking-wide">
      <UserAvatar  
        className="inline-block mr-[0.375rem] w-6 h-6 sm:hidden"
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
      <TimeRoute 
        className="sm:hidden"
        contentId={storyData.id}
        unixTime={storyData.time}
        isShort
      />
      <TimeTooltip 
        className="hidden sm:inline-block"
        unixTime={storyData.time} 
        contentId={storyData.id} 
      />
    </p>
  );
}
 
export default StoryItemHeader;