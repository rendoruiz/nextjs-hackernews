import Link from 'next/link';

import { useStory } from "../../../hooks/useStory";
import StoryItemHeader from "./StoryItemHeader";
import StoryItemDisplayLink from "./StoryItemDisplayLink";
import StoryItemBottomButtons from "./StoryItemBottomButtons";
import { Router } from 'next/dist/client/router';

const StoryItemWrapper = ({ storyId }) => {
  const { isLoading, isError, isSuccess, data } = useStory(storyId);

  return isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (
    <div
      className="grid border-brandDefault border-brandBorder transition-colors cursor-pointer select-none hover:border-brandBorderHover sm:grid-cols-[40px,1fr] sm:rounded sm:shadow-sm" 
      onClick={() => Router.push('story/' + data.id)}
    >
      {/* karma vertical bar */}
      <div className="hidden sm:flex sm:justify-center sm:items-start sm:rounded-l sm:py-2 sm:bg-white/80">
        <span className="font-bold text-xs text-brandTextPrimary">
          { data.type !== "job" && data.score }
        </span>
      </div>

      {/* content */}
      <div className="grid gap-2 bg-white p-2 pb-1 sm:rounded-r">
        {/* info */}
        <StoryItemHeader storyData={data} />

        {/* title */}
        <h3 className="font-medium text-brandTextPrimary text-lg leading-snug">
          {data.title}
        </h3>

        {/* display url */}
        { data.url && 
          (<StoryItemDisplayLink rawLink={data.url} />) 
        }

        {/* buttons */}
        <StoryItemBottomButtons storyData={data} />
      </div>
    </div>
  );
}

// fetch loading
const IsLoading = () => {
  return (
    <div className="grid grid-cols-[40px,1fr] break-words overflow-hidden border-brandDefault border-brandBorder rounded">
      <div className="flex justify-center items-start py-2 bg-white/80">
        <div className="rounded-md w-3/4 h-3 bg-brandTextSecondary/30 animate-pulse"></div>
      </div>
      <div className="grid gap-3 items-start bg-white p-2">
        <div className="rounded-md w-8/12 h-4 bg-brandTextSecondary/30 animate-pulse sm:w-5/12"></div>
        <div className="rounded-md w-11/12 h-5 bg-brandTextSecondary/30 animate-pulse sm:w-3/4"></div>
        <div className="rounded-md w-1/2 h-4 bg-brandTextSecondary/30 animate-pulse sm:w-1/3"></div>
        <div className="flex">
          <div className="rounded-md w-28 h-5 bg-brandTextSecondary/30 animate-pulse"></div>
          <div className="rounded-md ml-2 w-28 h-5 bg-brandTextSecondary/30 animate-pulse"></div>
        </div>
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
 
export default StoryItemWrapper;