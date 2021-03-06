import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import * as Dialog from '@radix-ui/react-dialog';

import HorizontalDotsGlyph from '../Glyphs/HorizontalDotsGlyph';
import LinkGlyph from '../Glyphs/LinkGlyph';
import HackerNewsGlyph from '../Glyphs/HackerNewsGlyph';
import UserGlyph from '../Glyphs/UserGlyph';
import CloseGlyph from '../Glyphs/CloseGlyph';

const MobileActionsModal = ({ itemData, storyId, triggerClassName }) => {
  const [hasApostropheS, setHasApostropheS] = useState(null);

  // run once
  useEffect(()=> {
    if (hasApostropheS === null && itemData?.by) {
      setHasApostropheS(itemData.by.split('').pop().toLowerCase() !== 's' ? true : false);
    }
  }, [itemData?.by]);

  return !itemData ? null : (  
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button 
          className={clsx(triggerClassName, "text-brandTextPrimary dark:text-brandDarkTextSecondary")}
          title="modal trigger"
        >
          <HorizontalDotsGlyph />
        </button>
      </Dialog.Trigger>

      <Dialog.Overlay className="fixed inset-0 bg-black/40 dark:bg-brandDarkAppBackground/70 sm:hidden" />
      <Dialog.Content className="fixed top-1/2 left-1/2 py-1 w-[94vw] max-w-md bg-brandObjectBackground -translate-x-1/2 -translate-y-1/2 dark:border-brandDefault dark:border-brandBorder dark:bg-brandDarkAppBackground sm:hidden">
        {/* screen reader */}
        <Dialog.Title className="hidden">item links overflow</Dialog.Title>
        <Dialog.Description className="hidden">other links associated with the current item</Dialog.Description>

        {/* item permalink */}
        <div className="grid grid-cols-[1fr,auto]">
          <Link href={"/story/" + (storyId ? `${storyId}/${itemData.id}` : itemData.id)}>
            <a className="grid grid-cols-[auto,1fr] items-center">
              <div className="grid place-items-center w-12 h-12 text-brandTextSecondary dark:text-brandDarkTextSecondary">
                <LinkGlyph />
              </div>
              <span className="text-brandTextPrimary dark:text-brandDarkTextPrimary">
                Permalink
              </span>
            </a>
          </Link>
          <Dialog.Close className="grid place-items-center w-12 h-12 text-brandTextSecondary dark:text-brandDarkTextSecondary">
            <CloseGlyph />
          </Dialog.Close>
        </div>

        {/* hackernews story permalink */}
        <a 
          href={'https://news.ycombinator.com/item?id=' + itemData.id}
          className="grid grid-cols-[auto,1fr] items-center"
        >
          <div className="grid place-items-center w-12 h-12 text-brandTextSecondary dark:text-brandDarkTextSecondary">
            <HackerNewsGlyph className="w-6 h-6" />
          </div>
          <span className="text-brandTextPrimary dark:text-brandDarkTextPrimary">
            Y Combinator Permalink
          </span>
        </a>

        {/* user link */}
        <Link href={'/user/' + itemData.by}>
          <a className="grid grid-cols-[auto,1fr] items-center">
            <div className="grid place-items-center w-12 h-12 text-brandTextSecondary">
              <UserGlyph className="w-6 h-6 rounded-full" />
            </div>
            <span className="py-2 text-brandTextPrimary overflow-ellipsis overflow-hidden dark:text-brandDarkTextPrimary">
              { itemData.by }'{ hasApostropheS && 's' } profile
            </span>
          </a>
        </Link>
      </Dialog.Content>
    </Dialog.Root>
  );
}
 
export default MobileActionsModal;