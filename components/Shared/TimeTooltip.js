import { useEffect, useState } from 'react';
import Link from 'next/link';
import * as Tooltip from '@radix-ui/react-tooltip';

import { getFullDateTime, getRelativeTime } from '../../helpers/formatDateTime';

const TimeTooltip = ({ className, unixTime, contentId, openNewTab = false }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [relativeTime, setRelativeTime] = useState(null);
  const [fullDateTime, setFullDateTime] = useState(null);

  useEffect(() => {
    setRelativeTime(getRelativeTime(unixTime));
    // also update if already loaded
    if (fullDateTime) {
      setFullDateTime(getFullDateTime(unixTime));
    }
  }, [unixTime]);

  // run once
  useEffect(() => {
    if (isOpen && !fullDateTime) {
      setFullDateTime(getFullDateTime(unixTime));
    }
  }, [unixTime, isOpen])

  return !relativeTime ? null : (  
    <Tooltip.Root 
      open={isOpen} 
      onOpenChange={(newState) => setIsOpen(newState)}
    >
      <Tooltip.Trigger asChild>
        { contentId ? (
          <span className={className}>
            <Link href={"/story/" + contentId}>
              <a className="hover:underline" target={openNewTab ? "_blank" : "_self"}>
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
        sideOffset={4}
      >
        <span>{ fullDateTime }</span>
        <Tooltip.Arrow className="my-[-0.5px] text-black fill-current" />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
 
export default TimeTooltip;