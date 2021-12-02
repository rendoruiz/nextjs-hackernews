import DropdownWrapper from "../../Dropdown/DropdownWrapper";
import { DropdownItemButton, DropdownItemLink } from "../../Dropdown/DropdownItem";
import ArrowUpGlyph from "../../Glyphs/ArrowUpGlyph";
import ChatGlyph from "../../Glyphs/ChatGlyph";
import HackerNewsGlyph from "../../Glyphs/HackerNewsGlyph";
import ShareGlyph from "../../Glyphs/ShareGlyph";
import LinkGlyph from "../../Glyphs/LinkGlyph";
import ExternalLinkGlyph from "../../Glyphs/ExternalLinkGlyph";
import copy from "copy-to-clipboard";

const StoryItemFooter = ({ storyData }) => {
  return storyData.type !== "job" && (  
    <div className="grid grid-flow-col auto-cols-auto justify-start gap-2 text-xs text-brandTextSecondary whitespace-nowrap sm:gap-1 sm:-ml-1">
      {/* karma (small breakpoint only) */}
      <div className="flex items-center border-brandDefault border-brandButtonOutline rounded-full pl-2 pr-3 py-1 sm:hidden">
        <ArrowUpGlyph />
        <span className="ml-1 font-bold">{ storyData.score }</span>
      </div>

      {/* comment count mobile */}
      <div className="flex items-center border-brandDefault border-brandButtonOutline rounded-full pl-2 pr-3 py-1 sm:hidden">
        <ChatGlyph />
        <span className="ml-1 font-bold">{ storyData.descendants }</span>
      </div>

      {/* comment count desktop */}
      <button className="hidden sm:flex items-center rounded pr-2 pl-1 py-1 font-bold transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive">
        <ChatGlyph />
        <span className="ml-1">{ storyData.descendants === 0 ? 'No' : storyData.descendants } Comment{ storyData.descendants > 1 && 's' }</span>
      </button>

      {/* share - collapsible dropdown panel */}
      {/* <DropdownWrapper 
        wrapperClassName="hidden bp420:relative bp420:grid"
        toggleDisplayGlyph={<ShareGlyph />}
        toggleDisplayText="Share"
      >
        <ShareDiscussionLinkButton storyId={storyData.id} />
        <ShareStoryLinkButton storyUrl={storyData.url} />
      </DropdownWrapper> */}

      {/* secondary items - collapsible dropdown panel */}
      {/* <DropdownWrapper listClassName="justify-self-end bp360:justify-self-center bp420:justify-self-start">
        <ShareDiscussionLinkButton 
          storyId={storyData.id} 
          wrapperClassName="grid bp420:hidden"
        />
        <ShareStoryLinkButton 
          storyUrl={storyData.url} 
          wrapperClassName="grid bp420:hidden"
        />
        <DropdownItemLink
          displayText="View Original"
          displayGlyph={<HackerNewsGlyph />}
          title="view on Hacker News"
          href={'https://news.ycombinator.com/item?id=' + storyData.id}
          target="_blank"
        />
      </DropdownWrapper> */}
    </div>
  );
}

// copy story discussion link component
const ShareDiscussionLinkButton = ({ storyId, wrapperClassName }) => {
  return (
    <DropdownItemButton
      displayText="Copy Link"
      displayGlyph={<LinkGlyph />}
      wrapperClassName={wrapperClassName}
      title="copy discussion link"
      onClick={(e) => CopyToClipboard(e, window.location + '/story/' + storyId)}
    />
  );
}

// copy story attached link component
const ShareStoryLinkButton = ({ storyUrl, wrapperClassName }) => {
  return storyUrl && (
    <DropdownItemButton
      displayText="Copy Story Link"
      displayGlyph={<ExternalLinkGlyph />}
      wrapperClassName={wrapperClassName}
      title="copy story attached link"
      onClick={(e) => CopyToClipboard(e, storyUrl)}
    />
  )
}

// copy string to clipboard
const CopyToClipboard = (e, textToCopy ) => {
  e.preventDefault();
  copy(textToCopy);
}
 
export default StoryItemFooter;