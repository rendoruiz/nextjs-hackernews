import clsx from "clsx";
import copy from "copy-to-clipboard";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import ShareGlyph from "../Glyphs/ShareGlyph";
import LinkGlyph from "../Glyphs/LinkGlyph";
import ExternalLinkGlyph from "../Glyphs/ExternalLinkGlyph";
import HackerNewsGlyph from "../Glyphs/HackerNewsGlyph";

const ShareDropdown = ({ itemData, route, withGlyph, toggleClassName }) => {
  return (  
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger className={clsx(
        toggleClassName, 
        "items-center rounded transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive"
      )}> 
        { withGlyph && (<ShareGlyph />) }
        <span className="ml-1 font-bold only:ml-0">Share</span>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content 
        className="hidden sm:grid border-brandDefault border-brandButtonOutline rounded bg-white text-sm text-brandTextSecondary shadow-transientObject overflow-hidden"
        align="start"
      >
        { route && (
          <ShareItem
            displayText="Copy Link"
            displayGlyph={<LinkGlyph className="w-4 h-4" />}
            clipboardString={window.location.origin + `${route}/` + itemData.id}
          />
        )}
        
        { itemData.url && (<>
          <DropdownMenu.Separator className="border-b-brandDefault border-brandButtonOutline" />
          <ShareItem
            displayText="Copy Story Link"
            displayGlyph={<ExternalLinkGlyph className="w-4 h-4" />}
            clipboardString={itemData.url}
          />
        </>)}
        <DropdownMenu.Separator className="border-b-brandDefault border-brandButtonOutline" />
        <ShareItem
          displayText="Copy Original Link"
          displayGlyph={<HackerNewsGlyph className="w-4 h-4" />}
          clipboardString={'https://news.ycombinator.com/item?id=' + itemData.id}
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
 
export default ShareDropdown;