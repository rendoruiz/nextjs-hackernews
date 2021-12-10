import Link from 'next/link';
import copy from "copy-to-clipboard";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import HorizontalDotsGlyph from '../../Glyphs/HorizontalDotsGlyph';
import HackerNewsGlyph from '../../Glyphs/HackerNewsGlyph';

const CommentItemFooter = ({ commentData }) => {
  return (  
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger 
        className="hidden sm:flex justify-self-start items-center rounded mt-2 mb-1 last:mb-0 p-1 text-brandTextSecondary transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive"
        title="story overflow menu trigger"
      > 
        <HorizontalDotsGlyph />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content 
        className="hidden sm:grid border-brandDefault border-brandButtonOutline rounded bg-white text-sm text-brandTextSecondary shadow-transientObject overflow-hidden"
        align="start"
      >
        <DropdownMenu.Item asChild>
          <a 
            href={'https://news.ycombinator.com/item?id=' + commentData.id}
            target="_blank"
            className="flex items-center rounded-sm px-2 py-[0.625rem] transition-colors cursor-pointer hover:bg-brandOrange/30 hover:text-brandTextPrimary"
          >
            <HackerNewsGlyph className="w-4 h-4" />
            <span className="ml-2 font-medium leading-none">View Original</span>
          </a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
 
export default CommentItemFooter;