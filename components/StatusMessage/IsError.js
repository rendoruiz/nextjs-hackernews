import { useRouter } from 'next/router';

// fetch error
const IsError = ({ contentId }) => {
  const router = useRouter(); 

  const handleClick = (e) => {
    e.preventDefault();
    router.back();
  }

  return (  
    <div className="grid place-items-center px-5 py-10 only:row-span-2">
      <div className="grid gap-5 text-center sm:gap-8 lg:gap-10">
        <span 
          className="text-6xl drop-shadow-md sm:text-6xl lg:text-8xl lg:drop-shadow-lg"
          title="uoh emoji"
        >
          😭
        </span>

        <p className="grid gap-2">
          <span className="font-medium text-2xl text-brandTextPrimary dark:text-brandDarkTextPrimary sm:text-3xl lg:text-4xl">
            An error occured.
          </span>
          { contentId && (
            <span className="text-xs text-brandTextSecondary italic dark:text-brandDarkTextSecondary sm:text-sm">Content ID "{ contentId }" cannot be found.</span>
          )}
        </p>

        <button 
          className="justify-self-center rounded-full mt-5 px-7 py-[6px] bg-brandOrange font-medium text-xs text-white uppercase tracking-wider transition hover:opacity-80 active:opacity-60 dark:bg-brandAppBackground dark:text-brandTextPrimary sm:px-10 sm:py-2 sm:text-sm"
          onClick={(e) => handleClick(e)}
        >
          Go back
        </button>
      </div>
    </div>
  );
}
 
export default IsError;