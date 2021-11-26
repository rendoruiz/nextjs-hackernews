import SiteFooter from "./SiteFooter";
import SiteHeader from "./SiteHeader";

const SiteLayout = ({ children }) => {
  return (  
    <div className="grid grid-rows-[auto,1fr,auto] min-h-screen bg-[#eee]">
      <SiteHeader />

      <main className="justify-self-center grid content-start p-5 w-full max-w-screen-lg">
        { children }
      </main>

      <SiteFooter />
    </div>
  );
}
 
export default SiteLayout;