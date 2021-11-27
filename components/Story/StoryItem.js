import Link from 'next/link';

import { useStory } from "../../hooks/useStory";
import ChatGlyph from '../Glyphs/ChatGlyph';
import ExternalLinkGlyph from '../Glyphs/ExternalLinkGlyph';
import HackerNewsGlyph from '../Glyphs/HackerNewsGlyph';

const StoryItem = ({ storyId }) => {
  const { isLoading, isError, isSuccess, data } = useStory(storyId);

  return isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (
    <Link href={`/story/${data.id}`}>
      <a
        title="view story discussion"
        className="grid grid-cols-[40px,1fr] break-words overflow-hidden border-brandDefault border-brandBorder rounded shadow-sm transition-colors cursor-pointer hover:border-brandBorderHover" 
        onClick={() => console.log('clicked')}
      >
        {/* karma vertical bar */}
        <div className="flex justify-center items-start py-2 bg-white/80">
          <span className="font-bold text-xs text-brandTextPrimary">
            { data.score }
          </span>
        </div>

        {/* content */}
        <div className="grid gap-2 bg-white p-2 pb-1">
          {/* info block */}
          <p className="text-xs text-brandTextInfo tracking-wide">
            Posted by&nbsp;
            <Link href={`/user/${data.id}`}>
              <a 
                title="TODO: profile card on hover"
                className="hover:underline"
                onClick={(e) => e.stopPropagation()}
              >
                u/{data.by}
              </a>
            </Link>
            &nbsp;
            <span 
              title={data.time}
              className="hover:underline"
            >
              {data.time}
            </span>
          </p>

          {/* title */}
          <h3 className="font-medium text-brandTextPrimary text-lg leading-snug">
            {data.title}
          </h3>

          {/* post url */}
          { data.url && (
            <a 
              title="view story attached link"
              href={data.url}
              target="_blank"
              className="justify-self-start flex items-center -mt-1 mb-2 text-xs text-brandOrange hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              {getDisplayUrl(data.url)} 
              <ExternalLinkGlyph className="ml-1 w-4 h-4" />
            </a>
          )}

          {/* buttons */}
          <div className="grid grid-flow-col auto-cols-auto justify-start gap-1 -ml-1 text-xs text-brandTextSecondary">
            {/* comment count */}
            <button className="flex items-center rounded pr-2 pl-1 py-1 font-bold transition-colors hover:bg-gray-200 active:bg-gray-300 ">
              <ChatGlyph />
              <span className="ml-1">{ data.descendants === 0 ? 'No' : data.descendants } Comment{ data.descendants > 1 && 's' }</span>
            </button>

            {/* view on hackernews link */}
            <a 
              title="view on Hacker News"
              href={`https://news.ycombinator.com/item?id=${data.id}`} 
              target="_blank"
              className="flex items-center rounded pr-2 pl-1 py-1 font-bold transition-colors hover:bg-gray-200 active:bg-gray-300"
              onClick={(e) => e.stopPropagation()}
            >
              <HackerNewsGlyph />
              <span className="ml-1">View Original</span>
            </a>
          </div>
        </div>
      </a>
    </Link>
  );
}

const getDisplayUrl = (rawUrlString) => {
  const url = new URL(rawUrlString);
  let urlSuffix = url.pathname + url.search;
  urlSuffix = urlSuffix.length <= 20
    ? urlSuffix
    : urlSuffix.slice(0, 17) + '...';
  return decodeURI(url.hostname.replace('www.', '') + urlSuffix);
}

// fetch loading
const IsLoading = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] break-words overflow-hidden border-brandDefault border-brandBorder rounded">
      <div className="flex justify-center items-start py-2 bg-white/80">
        <div className="rounded-md w-3/4 h-3 bg-brandTextSecondary/80 animate-pulse"></div>
      </div>
      <div className="grid gap-3 items-start bg-white p-2">
        <div className="rounded-md w-5/12 h-4 bg-brandTextSecondary/80 animate-pulse"></div>
        <div className="rounded-md w-10/12 h-5 bg-brandTextSecondary/80 animate-pulse"></div>
        <div className="rounded-md w-7/12 h-5 bg-brandTextSecondary/80 animate-pulse"></div>
      </div>
    </div>
  );
}

// fetch error
const IsError = () => {
  return (
    <div>An error occured.</div>
  )
}
 
export default StoryItem;