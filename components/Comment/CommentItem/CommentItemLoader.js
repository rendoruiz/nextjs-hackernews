import clsx from "clsx";

const CommentItemLoader = ({ itemDepth }) => {
  return (  
    <div className={clsx(
      "grid sm:grid-cols-[auto,1fr] sm:gap-x-2 sm:gap-y-1 sm:last:pb-0",
      { "border-t-brandDefault border-t-brandButtonOutline px-4 py-3 first:border-t-0 first:pt-0 dark:border-t-brandDarkBorder sm:border-none sm:px-2": itemDepth === 0 },
    )}>
      {/* mobile loader, depth > 0 */}
      <span className={clsx(
        { "hidden": itemDepth === 0 },
        "font-medium text-xs text-brandTextPrimary uppercase tracking-wide dark:text-brandDarkTextPrimary sm:hidden",
      )}>
        Loading...
      </span>

      <div className={clsx(
        itemDepth === 0 ? "grid" : "hidden",
        "grid-cols-[auto,1fr] gap-2 items-center sm:grid sm:col-span-2 sm:auto-cols-auto",
      )}>
        <div className="rounded-full w-6 h-6 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-7 sm:h-7" />
        <div className="flex items-center">
          <div className="rounded-md w-16 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30" />
          <div className="rounded-md ml-2 w-5 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-24" />
        </div>
      </div>

      <div className="hidden sm:grid col-start-1 w-7 overflow-hidden" />

      <div className={clsx(
        itemDepth === 0 ? "grid ml-8" : "hidden",
        "sm:grid sm:col-start-2 sm:ml-0 sm:mt-0", 
      )}>
        <div className="grid gap-[2px] sm:gap-1">
          <div className="rounded-md w-10/12 h-4 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30" />
          <div className="rounded-md w-full h-4 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-11/12" />
          <div className="rounded-md w-3/4 h-4 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30" />
        </div>
      </div>
    </div>
  );
}
 
export default CommentItemLoader;