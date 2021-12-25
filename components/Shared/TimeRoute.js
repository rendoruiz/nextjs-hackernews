import { useEffect, useState } from 'react';
import Link from 'next/link';

import { getRelativeTime, getShortRelativeTime } from '../../helpers/formatDateTime';

const TimeRoute = ({ className, contentId, unixTime, isShort }) => {
  const [itemTime, setItemTime] = useState(null);

  useEffect(() => {
    if (isShort) {
      setItemTime(getShortRelativeTime(unixTime));
    } else {
      setItemTime(getRelativeTime(unixTime));
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