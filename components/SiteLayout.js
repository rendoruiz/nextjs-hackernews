import clsx from "clsx";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SiteLayout = ({ children, contentClassName }) => {
  return (  
    <div className="grid min-w-[300px] min-h-screen">
      <div className="grid grid-rows-[auto,1fr,auto] bg-brandAppBackground transition-colors dark:bg-brandDarkAppBackground">
        <SiteHeader />

        <main 
          className={clsx(
            contentClassName,
            "justify-self-center grid content-start w-full max-w-screen-lg sm:px-6 sm:py-5", 
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