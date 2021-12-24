const CommentPreviewItemLoader = ({ heading, isLoading, isError }) => {
  return (  
    <div className="grid content-start gap-2 px-4 py-2 bg-brandObjectBackground transition-colors dark:bg-brandDarkAppBackground sm:gap-0 sm:border-brandDefault sm:border-brandBorder sm:rounded sm:px-2 sm:py-0 sm:shadow-sm sm:dark:border-brandDarkBorder sm:dark:bg-brandDarkObjectBackground">
      {/* debug */}
      { (isLoading || isError) && (
        <p className="justify-self-start rounded mb-1 px-1 py-[0.125rem] bg-brandButtonOutline font-bold text-xs2 text-brandTextSecondary uppercase dark:bg-brandDarkButtonOutline dark:text-brandTextSecondary">
          <span >{ heading }:&nbsp;</span>
          <span>{ isLoading ? "isLoading" : isError && "isError" }</span>
        </p>
      )}

      <div className="grid gap-2 sm:py-2">
        <div className="rounded-full w-6 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:hidden" />
        <div className="rounded-full w-3/4 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-4/5" />
      </div>

      <div className="hidden border-t-2 border-t-brandButtonOutline transition-colors dark:border-t-brandDarkBorder sm:block" />

      <div className="grid sm:grid-cols-[auto,1fr] sm:py-2">
        <div className="hidden sm:grid row-span-4 mr-2 px-[11px]">
          <div className="border-l-2 border-l-brandButtonOutline border-dashed transition-colors dark:border-brandDarkBorder" />
        </div>
        <div className="grid gap-2 sm:gap-3 sm:rounded sm:p-2 sm:bg-brandOrange/5 sm:transition-colors sm:dark:bg-brandDarkButton/5">
          <div className="rounded-full w-11/12 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-1/5 sm:h-2" />
          <div className="rounded-full w-10/12 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30" />
          <div className="hidden sm:block rounded-full w-11/12 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30" />
          <div className="rounded-full w-11/12 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-4/5" />
        </div>
      </div>
    </div>
  );
}
 
export default CommentPreviewItemLoader;