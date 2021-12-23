import clsx from 'clsx';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import HackerNewsGlyph from '../Glyphs/HackerNewsGlyph';
import HorizontalDotsGlyph from '../Glyphs/HorizontalDotsGlyph';

const OverflowDropdown = ({ itemData, triggerClassName }) => {
  return (  
    <DropdownMenu.Root modal={false}>
      <DropdownMenu.Trigger 
        className={clsx(
          triggerClassName,
          "self-center items-center rounded transition-colors hover:bg-brandButtonHover active:bg-brandButtonActive"
        )}
        title="story overflow menu trigger"
      > 
        <HorizontalDotsGlyph />
      </DropdownMenu.Trigger>
      <DropdownMenu.Content 
        className="hidden sm:grid border-brandDefault border-brandButtonOutline rounded bg-brandObjectBackground text-sm text-brandTextSecondary shadow-transientObject overflow-hidden dark:border-brandDarkBorder dark:bg-brandDarkObjectBackground dark:shadow-transientObjectDark"
        align="start"
      >
        <DropdownMenu.Item asChild>
          <a 
            href={'https://news.ycombinator.com/item?id=' + itemData.id}
            target="_blank"
            className="flex items-center rounded-sm px-2 py-[0.625rem] transition-colors cursor-pointer hover:bg-brandOrange/30 hover:text-brandTextPrimary dark:hover:text-brandDarkTextPrimary"
          >
            <HackerNewsGlyph className="w-4 h-4" />
            <span className="ml-2 font-medium leading-none">
              View at Y Combinator
            </span>
          </a>
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
 
export default OverflowDropdown;