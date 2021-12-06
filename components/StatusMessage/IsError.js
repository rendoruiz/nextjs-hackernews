// fetch error
const IsError = () => {
  return (  
    <div className="grid place-items-center only:row-span-3">
      <p className="grid gap-5 text-center sm:gap-8 lg:gap-10">
        <span 
          className="text-5xl sm:text-6xl lg:text-8xl" 
          title="uoh emoji"
        >
          😭
        </span>
        <span className="font-medium text-2xl sm:text-3xl lg:text-4xl">
          An error occured.
        </span>
      </p>
    </div>
  );
}
 
export default IsError;