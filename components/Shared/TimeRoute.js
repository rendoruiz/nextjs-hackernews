import Link from 'next/link';
import { useEffect, useState } from 'react';

import { useRelativeTime, useShortRelativeTime } from '../../hooks/useDate';

const TimeRoute = ({ className, contentId, unixTime, isShort }) => {
  const [itemTime, setItemTime] = useState(null);

  useEffect(() => {
    if (isShort) {
      setItemTime(useShortRelativeTime(unixTime));
    } else {
      setItemTime(useRelativeTime(unixTime));
    }
  }, [unixTime, isShort])

  return !itemTime ? null : (  
    <Link href={'/story/' + contentId}>
      <a className={className}>
        { itemTime }
      </a>
    </Link>
  );
}
 
export default TimeRoute;