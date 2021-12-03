import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';

import { useStory } from "../../../hooks/useStory";
import StoryItemHeader from "./StoryItemHeader";
import StoryItemDisplayLink from "./StoryItemDisplayLink";
import StoryItemFooter from "./StoryItemFooter";
import StoryItemShareDrawerButton from './StoryItemShareDrawerButton';
import { eachDayOfInterval } from 'date-fns';

const StoryItemWrapper = ({ storyId }) => {
  const router =useRouter();
  const { isLoading, isError, isSuccess, data } = useStory(storyId);

  return isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (
    <div
      className="grid transition-colors cursor-pointer sm:grid-cols-[40px,1fr] sm:border-brandDefault sm:border-brandBorder sm:rounded sm:shadow-sm sm:hover:border-brandBorderHover" 
      onClick={() => router.push('story/' + data.id)}
    >
      {/* karma vertical bar (desktop) */}
      <div className="hidden sm:flex justify-center items-start rounded-l py-2 bg-white/80">
        <span className="font-bold text-xs text-brandTextPrimary">
          { data.type !== "job" && data.score }
        </span>
      </div>

      {/* content */}
      <div className="relative justify-items-start grid grid-cols-[1fr,auto] gap-2 px-4 pt-2 pb-3 bg-white sm:grid-cols-none sm:rounded-r sm:p-2 sm:pb-1">
        {/* wrapper link (mobile only)  */}
        <Link href={'story/' + data.id}>
          <a className="absolute inset-0" />
        </Link>

        {/* header info */}
        <StoryItemHeader storyData={data} />

        {/* title */}
        <h3 className="row-start-2 col-start-1 font-medium text-brandTextPrimary leading-tight sm:row-start-auto sm:col-start-auto sm:text-lg sm:leading-snug">
          {data.title}
        </h3>

        {/* display url */}
        { data.url && 
          (<StoryItemDisplayLink rawLink={data.url} />) 
        }

        {/* footer buttons */}
        <StoryItemFooter storyData={data} />

        {/* share drawer invoker */}
        <StoryItemShareDrawerButton storyId={data.id} />
      </div>
    </div>
  );
}

// fetch loading
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

// fetch error
const IsError = () => {
  return (
    <div>An error occured.</div>
  )
}
 
export default StoryItemWrapper;