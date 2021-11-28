import DropdownWrapper from "../../Dropdown/DropdownWrapper";
import { DropdownItemButton, DropdownItemLink } from "../../Dropdown/DropdownItem";
import ArrowUpGlyph from "../../Glyphs/ArrowUpGlyph";
import ChatGlyph from "../../Glyphs/ChatGlyph";
import HackerNewsGlyph from "../../Glyphs/HackerNewsGlyph";
import ShareGlyph from "../../Glyphs/ShareGlyph";
import LinkGlyph from "../../Glyphs/LinkGlyph";
import ExternalLinkGlyph from "../../Glyphs/ExternalLinkGlyph";

const StoryItemBottomButtons = ({ storyData }) => {
  return storyData.type !== "job" && (  
    <div className="grid grid-flow-col auto-cols-auto justify-start gap-1 -ml-1 text-xs text-brandTextSecondary whitespace-nowrap">
      {/* karma */}
      <div className="flex items-center sm:hidden">
        <ArrowUpGlyph />
        <span className="mr-2 px-1 font-bold text-brandTextPrimary">{ storyData.score }</span>
      </div>

      {/* comment count */}
      <button className="flex items-center rounded pr-2 pl-1 py-1 font-bold transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive">
        <ChatGlyph />
        <span className="ml-1">{ storyData.descendants === 0 ? 'No' : storyData.descendants } Comment{ storyData.descendants > 1 && 's' }</span>
      </button>

      {/* share - collapsible dropdown panel */}
      <DropdownWrapper 
        wrapperClassName="hidden bp420:relative bp420:grid"
        toggleDisplayGlyph={<ShareGlyph />}
        toggleDisplayText="Share"
      >
        <DropdownItemButton
          displayText="Copy Link"
          displayGlyph={<LinkGlyph />}
          title="copy discussion link"
          onClick={(e) => CopyToClipboard(e, "discussion link")}
        />
        { storyData.url && (
          <DropdownItemButton
            displayText="Copy Story Link"
            displayGlyph={<ExternalLinkGlyph />}
            title="copy story attached link"
            onClick={(e) => CopyToClipboard(e, "story link")}
          />
        )} 
      </DropdownWrapper>

      {/* secondary items - collapsible dropdown panel */}
      <DropdownWrapper>
        {/* view on hackernews link */}
        <DropdownItemLink
          displayText="View Original"
          displayGlyph={<HackerNewsGlyph />}
          title="view on Hacker News"
          href={'https://news.ycombinator.com/item?id=' + storyData.id}
          target="_blank"
        />
      </DropdownWrapper>
    </div>
  );
}

const SaveButton = () => {

}

const ShareButton = () => {
  return (
    <button
    >

    </button>
  )
}

const CopyToClipboard = (e, textToCopy ) => {
  e.preventDefault();
  // e.stopPropagation();
  console.log(textToCopy);
}
 
export default StoryItemBottomButtons;