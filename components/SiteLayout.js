import clsx from "clsx";

import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SiteLayout = ({ children, contentClassName }) => {
  return (  
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-brandAppBackground">
      <SiteHeader />

      <main 
        className={clsx("justify-self-center grid content-start w-full max-w-screen-lg sm:px-6 sm:py-5", contentClassName)}
      >
        { children }
      </main>

      <SiteFooter />
    </div>
  );
}
 
export default SiteLayout;