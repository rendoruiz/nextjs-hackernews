import TimeRoute from '../../Shared/TimeRoute';
import TimeTooltip from '../../Shared/TimeTooltip';
import UserAvatar from '../../User/UserAvatar';
import UserHoverCard from '../../User/UserHoverCard';
import UserLink from '../../User/UserLink';

const StoryItemHeader = ({ storyData, userView }) => {
  return !storyData ? null : (  
    <div className="relative row-start-1 col-start-1 flex items-center text-sm text-brandTextInfo sm:row-start-auto sm:col-start-auto sm:text-xs sm:tracking-wide">
      {/* mobile layout: [avatar] [userId] • [timeCreated] */}
      <div className='flex items-center sm:hidden'>
        { !userView && (
          <>
            <UserAvatar  
              className="inline-block mr-[0.375rem] w-6 h-6"
              userId={storyData.by}
            /> 
            <UserLink
              className="font-medium text-brandTextPrimary"
              userId={storyData.by}
            />
            <span>&nbsp;•&nbsp;</span>
          </>
        )}
        <TimeRoute 
          contentId={storyData.id}
          unixTime={storyData.time}
          isShort
        />
      </div>
      
      {/* desktop layout: Posted by [userId] [timeCreated] */}
      <div className="hidden sm:flex items-center">
        <span>Posted by&nbsp;</span>
        <UserHoverCard 
          userId={storyData.by} 
          withPrefix
        />
        &nbsp;
        <TimeTooltip 
          unixTime={storyData.time} 
          contentId={storyData.id} 
        />
      </div>
    </div>
  );
}
 
export default StoryItemHeader;