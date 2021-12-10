import Link from 'next/link';
import * as Dialog from '@radix-ui/react-dialog';

import HorizontalDotsGlyph from "../../Glyphs/HorizontalDotsGlyph";
import CloseGlyph from '../../Glyphs/CloseGlyph';
import LinkGlyph from '../../Glyphs/LinkGlyph';
import HackerNewsGlyph from '../../Glyphs/HackerNewsGlyph';
import UserGlyph from '../../Glyphs/UserGlyph';

const CommentItemOverflowMobileModal = ({ commentData }) => {
  return !commentData ? null : (  
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <button className="-mr-2 -my-2 p-2 text-brandTextPrimary sm:hidden">
          <HorizontalDotsGlyph />
        </button>
      </Dialog.Trigger>

      <Dialog.Overlay className="fixed inset-0 bg-black/40 sm:hidden" />
      <Dialog.Content className="fixed top-1/2 left-1/2 py-1 w-[94vw] max-w-md bg-white -translate-x-1/2 -translate-y-1/2 sm:hidden">
        {/* screen reader */}
        <Dialog.Title className="hidden">comment item actionable links</Dialog.Title>
        <Dialog.Description className="hidden">actions associated with the current comment item</Dialog.Description>

        {/* comment item permalink */}
        <div className="grid grid-cols-[1fr,auto]">
          <Link href={'/comment/' + commentData.id}>
            <a className="grid grid-cols-[auto,1fr] items-center">
              <div className="grid place-items-center w-12 h-12 text-brandTextSecondary">
                <LinkGlyph />
              </div>
              <span className="text-brandTextPrimary">Permalink</span>
            </a>
          </Link>
          <Dialog.Close className="grid place-items-center w-12 h-12 text-brandTextSecondary">
            <CloseGlyph />
          </Dialog.Close>
        </div>

        {/* hackernews comment permalink */}
        <a 
          href={'https://news.ycombinator.com/item?id=' + commentData.id}
          className="grid grid-cols-[auto,1fr] items-center"
        >
          <div className="grid place-items-center w-12 h-12 text-brandTextSecondary">
            <HackerNewsGlyph className="w-6 h-6" />
          </div>
          <span className="text-brandTextPrimary">Original Permalink</span>
        </a>

        {/* user link */}
        <Link href={'/user/' + commentData.by}>
          <a className="grid grid-cols-[auto,1fr] items-center">
            <div className="grid place-items-center w-12 h-12 text-brandTextSecondary">
              <UserGlyph className="w-6 h-6 rounded-full" />
            </div>
            <span className="py-2 text-brandTextPrimary overflow-ellipsis overflow-hidden">
              { commentData.by }'{ commentData.by.split('').pop().toLowerCase() !== 's' && 's' } profile
            </span>
          </a>
        </Link>
      </Dialog.Content>
    </Dialog.Root>
  );
}
 
export default CommentItemOverflowMobileModal;