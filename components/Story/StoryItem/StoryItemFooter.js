import Link from 'next/link';

import ArrowUpGlyph from "../../Glyphs/ArrowUpGlyph";
import ChatGlyph from "../../Glyphs/ChatGlyph";
import ShareDropdown from '../../Shared/ShareDropdown';
import OverflowDropdown from '../../Shared/OverflowDropdown';

const StoryItemFooter = ({ storyData }) => {
  return storyData.type !== "job" && (  
    <div className="col-start-1 self-end grid grid-flow-col auto-cols-auto justify-start gap-2 text-xs text-brandTextSecondary whitespace-nowrap sm:row-start-auto sm:col-start-auto sm:relative sm:gap-1 sm:-ml-1">
      {/* karma (small breakpoint only) */}
      <div className="flex items-center border-brandDefault border-brandButtonOutline rounded-full pl-2 pr-3 py-1 sm:hidden">
        <ArrowUpGlyph />
        <span className="ml-1 font-medium">{ storyData.score }</span>
      </div>

      {/* comment count */}
      <Link href={'/story/' + storyData.id}>
        <a 
          className="flex items-center border-brandDefault border-brandButtonOutline rounded-full pl-2 pr-3 py-1 sm:border-none sm:rounded sm:pr-2 sm:pl-1 sm:transition-colors sm:hover:bg-brandButtonHover sm:active:bg-brandButtonActive"
          title="view story discussion"
        >
          <ChatGlyph />
          <span className="ml-1 sm:hidden font-medium">
            { storyData.descendants }
          </span>
          <span className="hidden sm:inline-block ml-1 font-bold">
            { storyData.descendants === 0 ? 'No' : storyData.descendants } Comment{ storyData.descendants > 1 && 's' }
          </span>
        </a>
      </Link>

      {/* share dropdown */}
      <ShareDropdown 
        itemData={storyData} 
        route="/story"
        withGlyph
        toggleClassName="hidden sm:flex pr-2 pl-1"
      />

      {/* overflow dropdown */}
      <OverflowDropdown 
        itemData={storyData} 
        className="hidden sm:flex px-2 py-1"
      />
    </div>
  );
}
 
export default StoryItemFooter;