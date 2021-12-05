import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';

import { useFullDateTime, useRelativeTime } from '../../hooks/useDate';

const TimeTooltip = ({ className, unixTime, contentId }) => {
  const relativeTime = useRelativeTime(unixTime);

  return !unixTime ? null : (  
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        { contentId ? (
          <span className={className}>
            <Link href={'user/' + contentId}>
              <a className="hover:underline">
                { relativeTime }
              </a>
            </Link>
          </span>
        ) : (
          <span className="hover:underline">
            { relativeTime }
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