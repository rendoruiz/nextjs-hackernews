import Link from 'next/link';
import { useRelativeTime, useShortRelativeTime } from '../../hooks/useDate';

const TimeRoute = ({ className, storyId, unixTime, isShort }) => {
  return unixTime && (  
    <Link href={'story' + storyId}>
      <a className={className}>{ isShort ? useShortRelativeTime(unixTime) : useRelativeTime(unixTime) }</a>
    </Link>
  );
}
 
export default TimeRoute;