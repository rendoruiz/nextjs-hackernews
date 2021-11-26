
const StoryList = ({ useHook, itemLimit = 10 }) => {
  const { isLoading, isError, data, isSuccess } =  useHook;

  return isSuccess && (  
    <div>
      <p>{ JSON.stringify([...data].filter((x, index) => index <= itemLimit)) }</p>
    </div>
  );
}
 
export default StoryList;