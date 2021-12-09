import Link from 'next/link';
import copy from "copy-to-clipboard";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import ArrowUpGlyph from "../../Glyphs/ArrowUpGlyph";
import ChatGlyph from "../../Glyphs/ChatGlyph";
import ShareGlyph from "../../Glyphs/ShareGlyph";
import HorizontalDotsGlyph from '../../Glyphs/HorizontalDotsGlyph';
import HackerNewsGlyph from "../../Glyphs/HackerNewsGlyph";
import LinkGlyph from "../../Glyphs/LinkGlyph";
import ExternalLinkGlyph from "../../Glyphs/ExternalLinkGlyph";

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
      <ShareDropdown storyData={storyData} />

      {/* overflow dropdown */}
      <OverflowButtonsDropdown storyData={storyData} />
    </div>
  );
}

const OverflowButtonsDropdown = ({ storyData }) => {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className="hidden sm:flex self-center items-center rounded px-2 py-1 transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive"> 
        <HorizontalDotsGlyph />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content 
        className="hidden sm:grid border-brandDefault border-brandButtonOutline rounded bg-white text-sm text-brandTextSecondary shadow-transientObject overflow-hidden"
        align="start"
      >
        <DropdownMenu.Item asChild>
          <a 
            href={'https://news.ycombinator.com/item?id=' + storyData.id}
            target="_blank"
            className="flex items-center rounded-sm px-2 py-[0.625rem] transition-colors cursor-pointer hover:bg-brandOrange/30 hover:text-brandTextPrimary"
          >
            <HackerNewsGlyph className="w-4 h-4" />
            <span className="ml-2 font-medium leading-none">View Original</span>
          </a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  )
}

const ShareDropdown = ({ storyData }) => {
  return (
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className="hidden sm:flex items-center rounded pr-2 pl-1 transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive"> 
        <ShareGlyph />
        <span className="ml-1 font-bold">Share</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content 
        className="hidden sm:grid border-brandDefault border-brandButtonOutline rounded bg-white text-sm text-brandTextSecondary shadow-transientObject overflow-hidden"
        align="start"
      >
        <ShareItem
          displayText="Copy Link"
          displayGlyph={<LinkGlyph className="w-4 h-4" />}
          clipboardString={window.location.origin + '/story/' + storyData.id}
        />
        { storyData.url && (<>
          <DropdownMenu.Separator className="border-b-brandDefault border-brandButtonOutline" />
          <ShareItem
            displayText="Copy Story Link"
            displayGlyph={<ExternalLinkGlyph className="w-4 h-4" />}
            clipboardString={storyData.url}
          />
        </>)}
        <DropdownMenu.Separator className="border-b-brandDefault border-brandButtonOutline" />
        <ShareItem
          displayText="Copy Original Link"
          displayGlyph={<HackerNewsGlyph className="w-4 h-4" />}
          clipboardString={'https://news.ycombinator.com/item?id=' + storyData.id}
        />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}

const ShareItem = ({ displayText, displayGlyph, clipboardString }) => {
  return (
    <DropdownMenu.Item 
      className="flex items-center rounded-sm px-2 py-[0.625rem] transition-colors cursor-pointer hover:bg-brandOrange/30 hover:text-brandTextPrimary"
      onClick={() => copy(clipboardString)}
    >
      { displayGlyph }
      <span className="ml-2 font-medium leading-none">{ displayText }</span>
    </DropdownMenu.Item>
  );
}
 
export default StoryItemFooter;