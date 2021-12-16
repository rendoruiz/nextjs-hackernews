import Link from 'next/link';
import clsx from 'clsx';

import { useStory } from "../../../hooks/useStory";
import { useHtmlParser } from '../../../hooks/useHtmlParser';
import StoryItemHeader from "./StoryItemHeader";
import StoryItemDisplayLink from "./StoryItemDisplayLink";
import StoryItemFooter from "./StoryItemFooter";
import StoryItemMobileShareTrigger from './StoryItemMobileShareTrigger';
import ItemIsError from '../../StatusMessage/ItemIsError';
import MobileActionsModal from '../../Shared/MobileActionsModal';

const StoryItem = ({ storyId, withText = false, isStatic = false, }) => {
  const { isLoading, isError, isSuccess, data } = useStory(storyId);

  return isLoading ? (<IsLoading />) : isError || !data ? (<ItemIsError />) : isSuccess && (
    data.deleted || data.dead ? (<IsDeadOrDeleted />) : (
      <div className={clsx(
        "grid transition-colors sm:grid-cols-[40px,1fr] sm:border-brandDefault sm:border-brandBorder sm:rounded sm:shadow-sm",
        { "cursor-pointer sm:hover:border-brandBorderHover": !isStatic }
      )}>
        {/* karma left side bar (desktop) */}
        <Link href={'/story/' + data.id}>
          <a 
            className={clsx(
              "hidden sm:flex justify-center items-start rounded-l py-2 bg-white/80",
              { "pointer-events-none sm:bg-white": isStatic }
            )}
            title="view story discussion"
          >
            <span className="font-bold text-xs text-brandTextPrimary">
              { data.type !== "job" && data.score }
            </span>
          </a>
        </Link>

        {/* content */}
        <div className={clsx(
          "relative justify-items-start grid grid-cols-[1fr,auto] gap-2 px-4 pb-3 bg-white sm:grid-cols-none sm:rounded-r sm:p-2 sm:pr-4 sm:pb-1",
          isStatic ? "pt-3" : "pt-2"
        )}>
          {/* wrapper link  */}
          { !isStatic && (
            <Link href={'/story/' + data.id}>
              <a 
                className="absolute inset-0" 
                title="view story discussion" 
              />
            </Link>
          )}

          {/* header info - poster id, date created */}
          <StoryItemHeader storyData={data} />
          
          {/* mobile overflow actions - story links, poster link */}
          <MobileActionsModal 
            itemData={data} 
            triggerClassName="row-start-1 col-start-2 justify-self-end relative -mr-2 -my-2 px-2 sm:hidden"
          />

          {/* title */}
          <Link href={'/story/' + data.id}>
            <a className={clsx(
              "row-start-2 col-start-1 mb-1 font-medium text-brandTextPrimary leading-tight sm:row-start-auto sm:col-start-auto sm:mb-0 sm:text-lg sm:leading-snug",
              { "visited:text-brandTextLinkVisited": !window.location.pathname.includes('/story') },
            )}>
              { data.title }
            </a>
          </Link>

          {/* story link */}
          <StoryItemDisplayLink rawLink={data.url} />
          
          {/* text/content */}
          { withText && data.text && (
            <div className="col-span-2 inline-block mb-1 text-sm break-words sm:col-auto sm:mb-2">
              { useHtmlParser(data.text) }
            </div>
          )}

          {/* footer buttons */}
          <StoryItemFooter storyData={data} />

          {/* share drawer invoker */}
          <StoryItemMobileShareTrigger storyId={data.id} />
        </div>
      </div>
    )
  );
}

// story item loader
const IsLoading = () => {
  return (
    <div className="grid sm:grid-cols-[40px,1fr] sm:border-brandDefault sm:border-brandBorder sm:rounded">
      <div className="hidden sm:flex justify-center items-start py-2 bg-white/80">
        <div className="rounded-md w-3/4 h-3 bg-brandTextSecondary/30 animate-pulse"></div>
      </div>
      <div className="grid gap-3 items-start bg-white px-4 pt-2 pb-3 sm:p-2">
        <div className="flex items-center">
          <div className="rounded-full mr-[0.375rem] w-6 h-6 bg-brandTextSecondary/30 animate-pulse"></div>
          <div className="rounded-md w-1/2 h-4 bg-brandTextSecondary/30 animate-pulse sm:w-5/12"></div>
        </div>
        <div className="rounded-md w-10/12 h-5 bg-brandTextSecondary/30 animate-pulse sm:w-3/4"></div>
        <div className="rounded-md w-1/2 h-5 bg-brandTextSecondary/30 animate-pulse sm:h-4 sm:w-1/3"></div>
        <div className="mt-[0.375rem] flex sm:mt-0">
          <div className="rounded-md w-20 h-5 bg-brandTextSecondary/30 animate-pulse sm:w-28"></div>
          <div className="rounded-md ml-2 w-14 h-5 bg-brandTextSecondary/30 animate-pulse sm:w-28"></div>
        </div>
      </div>
    </div>
  );
}

const IsDeadOrDeleted = () => {
  return (
    <div>Content cannot be found.</div>
  )
}
 
export default StoryItem;