import { useEffect, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import clsx from 'clsx';

import { useStory } from "../../../hooks/useStory";
import { useHtmlParser } from '../../../hooks/useHtmlParser';
import StoryItemLoader from './StoryItemLoader';
import ItemIsError from '../../StatusMessage/ItemIsError';
import ItemIsDeadOrDeleted from '../../StatusMessage/ItemIsDeadOrDeleted';
import StoryItemHeader from "./StoryItemHeader";
import ShortenedExternalLink from '../../Shared/ShortenedExternalLink';
import StoryItemFooter from "./StoryItemFooter";
import StoryItemMobileShareTrigger from './StoryItemMobileShareTrigger';
import MobileActionsModal from '../../Shared/MobileActionsModal';

const StoryItem = ({ storyId, withText = false, isStatic = false, userView = false, useTitle = false }) => {
  const { isLoading, isError, isSuccess, data } = useStory(storyId);
  const [textContent, setTextContent] = useState(null);

  useEffect(() => {
    if (withText && data) {
      setTextContent(useHtmlParser(data.text));
    }
  }, [withText, data?.text])

  return isLoading ? (<StoryItemLoader />) : isError || !data ? (<ItemIsError />) : isSuccess && (
    data.deleted || data.dead ? (<ItemIsDeadOrDeleted />) : data.type === "comment" ? null : (
      <>
        { useTitle && (
          <Head>
            <title>{data.title} : Hacker News</title>
            <meta property="og:title" content={data.title + " : Hacker News"} />
          </Head>
        )}

        <div className={clsx(
          "grid transition-colors sm:grid-cols-[40px,1fr] sm:border-brandDefault sm:border-brandBorder sm:rounded sm:shadow-sm sm:dark:border-brandDarkBorder",
          { "cursor-pointer sm:hover:border-brandBorderHover sm:hover:dark:border-brandDarkBorderHover": !isStatic }
        )}>
          {/* karma left side bar (desktop) */}
          <Link href={'/story/' + data.id}>
            <a 
              className={clsx(
                "hidden sm:flex justify-center items-start rounded-l py-2 bg-brandObjectBackground/80 transition-colors dark:bg-brandDarkObjectBackground/80",
                { "pointer-events-none sm:bg-brandObjectBackground sm:dark:bg-brandDarkObjectBackground": isStatic }
              )}
              title="view story discussion"
            >
              <span className="font-bold text-xs text-brandTextPrimary dark:text-brandDarkTextPrimary">
                { data.type !== "job" && data.score }
              </span>
            </a>
          </Link>

          {/* content */}
          <div className={clsx(
            "relative justify-items-start grid grid-cols-[1fr,auto] gap-2 px-4 pb-3 bg-brandObjectBackground transition-colors dark:bg-brandDarkAppBackground sm:grid-cols-none sm:rounded-r sm:p-2 sm:pr-4 sm:pb-1 sm:dark:bg-brandDarkObjectBackground",
            isStatic ? "pt-3" : "pt-2"
          )}>
            {/* wrapper link */}
            { !isStatic && (
              <Link href={'/story/' + data.id}>
                <a 
                  className="absolute inset-0" 
                  title="view story discussion" 
                />
              </Link>
            )}

            {/* header info - poster id, date created */}
            <StoryItemHeader 
              storyData={data} 
              userView={userView}
            />
            
            {/* mobile overflow actions - story links, poster link */}
            <MobileActionsModal 
              itemData={data} 
              triggerClassName="row-start-1 col-start-2 justify-self-end relative -mr-2 -my-2 px-2 sm:hidden"
            />

            {/* title */}
            <Link href={'/story/' + data.id}>
              <a className={clsx(
                "row-start-2 col-start-1 mb-1 font-medium text-brandTextPrimary leading-tight dark:text-brandDarkTextPrimary sm:row-start-auto sm:col-start-auto sm:mb-0 sm:text-lg sm:leading-snug",
                { "visited:text-brandTextLinkVisited dark:visited:text-brandDarkTextLinkVisited": !isStatic },
              )}>
                { data.title }
              </a>
            </Link>

            {/* story link */}
            <ShortenedExternalLink 
              rawLink={data.url}
              wrapperClassName="row-start-2 col-start-2 justify-self-end relative grid items-end w-[70px] h-[52px] bg-brandOrange text-[0.625rem] dark:bg-brandOrange/80 sm:row-start-auto sm:col-start-auto sm:justify-self-start sm:inline-flex sm:items-center sm:-mt-1 sm:t-1 sm:pb-2 sm:w-auto sm:h-auto sm:bg-transparent sm:text-xs sm:text-brandOrange sm:hover:underline sm:dark:bg-transparent"
              textClassName="p-1 bg-black/70 text-white truncate sm:p-0 sm:px-0 sm:bg-transparent sm:text-current sm:overflow-auto"
              glyphClassName="hidden ml-1 w-4 h-4 sm:inline-block"
            />
            
            {/* text/content */}
            { textContent && (
              <div className="col-span-2 inline-block mb-1 text-sm text-brandTextPrimary break-words dark:text-brandDarkTextPrimary sm:col-auto sm:mb-2">
                { textContent }
              </div>
            )}

            {/* footer buttons */}
            <StoryItemFooter storyData={data} />

            {/* share drawer invoker */}
            <StoryItemMobileShareTrigger storyId={data.id} />
          </div>
        </div>
      </>
    )
  );
}
 
export default StoryItem;