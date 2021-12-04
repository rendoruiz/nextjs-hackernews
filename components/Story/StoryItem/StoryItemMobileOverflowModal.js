import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

import HorizontalDotsGlyph from '../../Glyphs/HorizontalDotsGlyph';
import CloseGlyph from '../../Glyphs/CloseGlyph';
import LinkGlyph from '../../Glyphs/LinkGlyph';
import HackerNewsGlyph from '../../Glyphs/HackerNewsGlyph';
import UserGlyph from '../../Glyphs/UserGlyph';

const StoryItemMobileOverflowModal = ({ storyData }) => {
  return !storyData ? null : ( 
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button 
            className="justify-self-end relative -mr-2 px-2 text-brandTextPrimary sm:hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <HorizontalDotsGlyph />
          </button>
        </Dialog.Trigger>
        <Dialog.Overlay className="fixed inset-0 bg-black/40 sm:hidden" />
        <Dialog.Content className="fixed top-1/2 left-1/2 w-[94vw] max-w-md -translate-x-1/2 -translate-y-1/2 bg-white sm:hidden">
          <Dialog.Title className="hidden">story item links overflow</Dialog.Title>
          <Dialog.Description className="hidden">other links associated with the current story item</Dialog.Description>

          {/* story link */}
          <div className="grid grid-cols-[1fr,auto]">
            <Link href={'story/' + storyData.id}>
              <a 
                className="grid grid-cols-[auto,1fr] items-center"
                onClick={(e) => e.stopPropagation()} 
              >
                <div className="grid place-items-center w-12 h-12 text-brandTextSecondary">
                  <LinkGlyph />
                </div>
                <span className="text-brandTextPrimary">Permalink</span>
              </a>
            </Link>
            <Dialog.Close 
              onClick={(e) => e.stopPropagation()} 
              className="grid place-items-center w-12 h-12 text-brandTextSecondary"
            >
              <CloseGlyph />
            </Dialog.Close>
          </div>

          {/* hackernews story link */}
          <a 
            href={'https://news.ycombinator.com/item?id=' + storyData.id}
            className="grid grid-cols-[auto,1fr] items-center"
            onClick={(e) => e.stopPropagation()} 
          >
            <div className="grid place-items-center w-12 h-12 text-brandTextSecondary">
              <HackerNewsGlyph className="w-6 h-6" />
            </div>
            <span className="text-brandTextPrimary">Original Permalink</span>
          </a>

          {/* user link */}
          <Link href={'user/' + storyData.by}>
            <a
              className="grid grid-cols-[auto,1fr] items-center"
              onClick={(e) => e.stopPropagation()} 
            >
              <div className="grid place-items-center w-12 h-12 text-brandTextSecondary">
                <UserGlyph className="w-6 h-6 rounded-full" />
              </div>
              <span className="py-2 text-brandTextPrimary overflow-ellipsis overflow-hidden">{ storyData.by }'{ storyData.by.split('').pop().toLowerCase() !== 's' && 's' } profile</span>
            </a>
          </Link>
        </Dialog.Content>
      </Dialog.Root>
  );
}


 
export default StoryItemMobileOverflowModal;