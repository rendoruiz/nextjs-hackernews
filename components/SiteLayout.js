import clsx from "clsx";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SiteLayout = ({ children, contentClassName }) => {
  return (  
    <div className="grid min-w-[300px] min-h-screen bg-brandAppBackground transition-colors dark:bg-brandDarkAppBackground">
      <div className="grid grid-rows-[auto,1fr,auto]">
        <SiteHeader />

        <main 
          className={clsx(
            contentClassName,
            "justify-self-center grid content-start w-full max-w-screen-lg transition-colors dark:bg-brandDarkObjectBackground sm:px-6 sm:py-5 sm:dark:bg-transparent", 
          )}
        >
          { children }
        </main>

        <SiteFooter />
      </div>
    </div>
  );
}
 
export default SiteLayout;