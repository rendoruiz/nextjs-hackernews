import clsx from "clsx";
import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SiteLayout = ({ children, contentClassName }) => {
  return (  
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-brandAppBackground">
      <SiteHeader />

      <main 
        className={clsx("justify-self-center grid content-start p-5 w-full max-w-screen-lg", contentClassName)}
      >
        { children }
      </main>

      <SiteFooter />
    </div>
  );
}
 
export default SiteLayout;