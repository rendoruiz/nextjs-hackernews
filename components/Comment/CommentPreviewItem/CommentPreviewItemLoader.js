const CommentPreviewItemLoader = ({ heading, isLoading, isError }) => {
  return (  
    <div className="grid content-start px-4 py-2 bg-brandObjectBackground dark:bg-brandDarkAppBackground sm:border-brandBorder  sm:rounded sm:shadow-sm sm:dark:border-brandDarkBorder sm:dark:bg-brandDarkObjectBackground">
      {/* debug */}
      { (isLoading || isError) && (
        <span className="justify-self-start rounded mb-1 px-1 py-[0.125rem] bg-brandButtonOutline font-bold text-xs2 text-brandTextSecondary uppercase dark:bg-brandDarkButtonOutline dark:text-brandTextSecondary">
          { isLoading ? "isLoading" : isError && "isError" }
        </span>
      )}
      <p className="font-medium text-sm uppercase text-red-500">Loading { heading }...</p>
    </div>
  );
}
 
export default CommentPreviewItemLoader;