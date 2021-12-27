import { useEffect, useState } from "react";
import * as Tooltip from '@radix-ui/react-tooltip';

import { getRelativeTime, getFullDateTime } from "../../../../helpers/formatDateTime";
import { formatNumber } from "../../../../helpers/formatNumber";
import StarGlyph from "../../../Glyphs/StarGlyph";
import CakeGlyph from "../../../Glyphs/CakeGlyph";
import PlusGlyph from "../../../Glyphs/PlusGlyph";

const UserViewDetailsStats = ({ userData }) => {
  const [relativeTime, setRelativeTime] = useState(null);
  const [relativeTimeWithSuffix, setRelativeTimeWithSuffix] = useState(null);
  const [fullDateTime, setFullDateTime] = useState(null);
  const [karma, setKarma] = useState(null);
  const [submissions, setSubmissions] = useState(null);

  useEffect(() => {
    if (userData) {
      setRelativeTime(getRelativeTime(userData.created, false));
      setRelativeTimeWithSuffix(getRelativeTime(userData.created));
      setFullDateTime(getFullDateTime(userData.created, true));
      setKarma(formatNumber(userData.karma));
      setSubmissions(!userData.submitted ? "0" :  formatNumber(userData.submitted.length));
    }
  }, [userData]);

  return (  
    <>
      {/* mobile stats */}
      <div className="flex flex-wrap justify-center mb-2 font-extralight leading-tight md:hidden">
        <div>
          <span className="font-bold">{ karma }</span>
          <span> karma</span>
        </div>
        <div>
          <span className="mx-1">•</span>
          <span className="font-bold">{ relativeTime }</span>
          <span> on Hacker News</span>
        </div>
      </div>

      {/* desktop stats */}
      <div className="hidden md:grid bp960:grid-cols-2 gap-y-3 tracking-wide">
        <div className="grid gap-1">
          <span className="font-medium">Karma</span>
          <div className="flex items-center">
            <StarGlyph className="w-4 h-4 text-brandOrange/80" />
            <span className="ml-1 text-xs text-brandTextSecondary dark:text-brandDarkTextSecondary">
              { karma }
            </span>
          </div>
        </div>
        <div className="grid gap-1 order-3 bp960:order-none">
          <span className="font-medium">Cake day</span>
          <div className="flex items-center">
            <CakeGlyph className="w-4 h-4 text-brandOrange/80" />
            <CakeDayTooltip tooltip={relativeTimeWithSuffix}>
              <span className="ml-1 text-xs text-brandTextSecondary dark:text-brandDarkTextSecondary">
                { fullDateTime }
              </span>
            </CakeDayTooltip>
          </div>
        </div>
        <div className="grid gap-1">
          <span className="font-medium">Submissions</span>
          <div className="flex items-center">
            <PlusGlyph className="w-4 h-4 text-brandOrange/80" />
            <span className="ml-1 text-xs text-brandTextSecondary dark:text-brandDarkTextSecondary">
              { submissions }
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

const CakeDayTooltip = ({ children, tooltip }) => {
  return (
    <Tooltip.Root>
      <Tooltip.Trigger asChild>
        { children }
      </Tooltip.Trigger>
      <Tooltip.Content 
        className="rounded px-2 py-1 bg-black font-medium text-xs text-white"
        side="bottom"
        sideOffset={5}
      >
        <span>{ tooltip }</span>
        <Tooltip.Arrow className="my-[-0.5px] text-black fill-current" />
      </Tooltip.Content>
    </Tooltip.Root>
  );
}
 
export default UserViewDetailsStats;