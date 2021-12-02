import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';

import { useFullDateTime, useRelativeTime } from '../../hooks/useDate';

const TimeTooltip = ({ unixTime, contentId }) => {
  return (  
    <Tooltip.Root>
      <Tooltip.Trigger>
        { contentId ? (
          <Link href={'user/' + contentId}>
            <a className="hover:underline">
              { useRelativeTime(unixTime) }
            </a>
          </Link>
        ) : (
          <span className="hover:underline">
            { useRelativeTime(unixTime) }
          </span>
        )}
      </Tooltip.Trigger>
      <Tooltip.Content 
        className="rounded px-2 py-1 bg-black font-medium text-xs text-white"
        side="top"
      >
        <span>{ useFullDateTime(unixTime) }</span>
        <Tooltip.Arrow className=" text-black fill-current" />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
 
export default TimeTooltip;