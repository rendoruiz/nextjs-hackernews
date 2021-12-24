const StoryItemLoader = () => {
  return (  
    <div className="grid sm:grid-cols-[40px,1fr] sm:border-brandDefault sm:border-brandBorder sm:rounded sm:dark:border-brandDarkBorder">
      <div className="hidden sm:flex justify-center items-start py-2 bg-brandObjectBackground/80 dark:bg-brandDarkObjectBackground/80">
        <div className="rounded-md w-3/4 h-3 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30"></div>
      </div>
      <div className="grid gap-3 items-start px-4 pt-2 pb-3 bg-brandObjectBackground dark:bg-brandDarkAppBackground sm:p-2 sm:dark:bg-brandDarkObjectBackground">
        <div className="flex items-center">
          <div className="rounded-full mr-[0.375rem] w-6 h-6 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30"></div>
          <div className="rounded-md w-1/2 h-4 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-5/12"></div>
        </div>
        <div className="rounded-md w-10/12 h-5 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-3/4"></div>
        <div className="rounded-md w-1/2 h-5 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:h-4 sm:w-1/3"></div>
        <div className="mt-[0.375rem] flex sm:mt-0">
          <div className="rounded-md w-20 h-5 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-28"></div>
          <div className="rounded-md ml-2 w-14 h-5 bg-brandTextSecondary/30 animate-pulse dark:bg-brandDarkTextSecondary/30 sm:w-28"></div>
        </div>
      </div>
    </div>
  );
}
 
export default StoryItemLoader;