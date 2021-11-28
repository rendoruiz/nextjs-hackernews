import DropdownWrapper from "../../Dropdown/DropdownWrapper";
import ArrowUpGlyph from "../../Glyphs/ArrowUpGlyph";
import ChatGlyph from "../../Glyphs/ChatGlyph";
import HackerNewsGlyph from "../../Glyphs/HackerNewsGlyph";

const StoryItemBottomButtons = ({ storyData }) => {
  return (  
    <div className="grid grid-flow-col auto-cols-auto justify-start gap-1 -ml-1 text-xs text-brandTextSecondary">
      {/* karma */}
      <div className="flex items-center sm:hidden">
        <ArrowUpGlyph />
        <span className="pr-2 pl-1 font-bold text-brandTextPrimary">{ storyData.score }</span>
      </div>

      {/* comment count */}
      <button className="flex items-center rounded pr-2 pl-1 py-1 font-bold transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive">
        <ChatGlyph />
        <span className="ml-1">{ storyData.descendants === 0 ? 'No' : storyData.descendants } Comment{ storyData.descendants > 1 && 's' }</span>
      </button>

      {/* view on hackernews link */}
      <a 
        title="view on Hacker News"
        href={'https://news.ycombinator.com/item?id=' + storyData.id} 
        target="_blank"
        className="flex items-center rounded pr-2 pl-1 py-1 font-bold transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive"
        onClick={(e) => e.stopPropagation()}
      >
        <HackerNewsGlyph />
        <span className="ml-1">View Original</span>
      </a>

      {/* secondary items - collapsible panel */}
      <DropdownWrapper />
    </div>
  );
}
 
export default StoryItemBottomButtons;