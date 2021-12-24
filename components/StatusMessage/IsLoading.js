// fetch loading
const IsLoading = () => {
  return (  
    <div className="grid place-items-center px-5 py-10 only:row-span-2">
      <div className="grid gap-5 justify-items-center sm:gap-8">
        <div className="animate-spin rounded-full w-10 h-10 border-b-4 border-brandOrange sm:w-14 sm:h-14" />
        <span className="font-medium text-brandTextPrimary text-2xl dark:text-brandDarkTextPrimary sm:text-3xl">
          Fetching content ...
        </span>
      </div>
    </div>
  );
}
 
export default IsLoading;