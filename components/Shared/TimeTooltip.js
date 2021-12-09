import Link from 'next/link';
import { Tooltip, TooltipArrow, TooltipContent, TooltipTrigger } from "@radix-ui/react-tooltip";

import { useFullDateTime, useRelativeTime } from '../../hooks/useDate';

const TimeTooltip = ({ className, unixTime, contentId, isComment }) => {
  const relativeTime = useRelativeTime(unixTime);

  return !unixTime ? null : (  
    <Tooltip>
      <TooltipTrigger asChild>
        { contentId ? (
          <span className={className}>
            <Link href={(!isComment ? "/story/" : "/comment/") + contentId}>
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
      </TooltipTrigger>
      <TooltipContent 
        className="rounded px-2 py-1 bg-black font-medium text-xs text-white"
        side="top"
        sideOffset={4}
      >
        <span>{ useFullDateTime(unixTime) }</span>
        <TooltipArrow className="my-[-0.5px] text-black fill-current" />
      </TooltipContent>
    </Tooltip>
  );
}
 
export default TimeTooltip;