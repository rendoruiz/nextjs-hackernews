import SiteLayout from "../components/SiteLayout";

const PageNotFoundView = () => {
  return (  
    <SiteLayout contentClassName="place-items-center grid-rows-1">
      <div className="grid place-items-center">
        <p className="grid gap-5 text-center sm:gap-8 lg:gap-10">
          <span 
            className="text-5xl sm:text-6xl lg:text-8xl" 
            title="dead emoji"
          >
            😵
          </span>
          <span className="font-medium text-2xl sm:text-3xl lg:text-4xl">Page not found.</span>
        </p>
      </div>
    </SiteLayout>
  );
}
 
export default PageNotFoundView;