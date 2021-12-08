import Link from 'next/link';
import { useRelativeTime, useShortRelativeTime } from '../../hooks/useDate';

const TimeRoute = ({ className, contentId, unixTime, isShort }) => {
  return !unixTime ? null : (  
    <Link href={'/story/' + contentId}>
      <a className={className}>{ isShort ? useShortRelativeTime(unixTime) : useRelativeTime(unixTime) }</a>
    </Link>
  );
}
 
export default TimeRoute;