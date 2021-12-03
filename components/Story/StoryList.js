import StoryItemWrapper from "./StoryItem/StoryItemWrapper";

const StoryList = ({ useHook, itemLimit = 20 }) => {
  const { isLoading, isError, data, isSuccess } = useHook;

  return isLoading ? (<IsLoading />) : isError ? (<IsError />) : isSuccess && (  
    <div className="grid content-start gap-1 sm:gap-3">
    {
      [...data].slice(0, itemLimit).map((itemId) => 
        <StoryItemWrapper
          key={itemId}
          storyId={itemId}
        />
      )
    }
    </div>
  );
}

// fetch loading
const IsLoading = () => {
  return (
    <div className="grid place-items-center">
      <p className="grid gap-5 justify-items-center sm:gap-8">
        <div className="animate-spin rounded-full w-10 h-10 border-b-4 border-brandOrange sm:w-14 sm:h-14" />
        <span className="font-medium text-2xl sm:text-3xl">Fetching content ...</span>
      </p>
    </div>
  )
}

// fetch error
const IsError = () => {
  return (
    <div className="grid place-items-center">
      <p className="grid gap-5 text-center sm:gap-8 lg:gap-10">
        <span 
          className="text-5xl sm:text-6xl lg:text-8xl" 
          title="uoh emoji"
        >
          😭
        </span>
        <span className="font-medium text-2xl sm:text-3xl lg:text-4xl">An error occured.</span>
      </p>
    </div>
  )
}
 
export default StoryList;