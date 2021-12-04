import SiteLayout from "../SiteLayout";
import StoryNav from "./StoryNav";
import StoryList from "./StoryList";
import { useRouter } from "next/dist/client/router";
import { useEffect, useState } from "react";

const defaultCount = 5;

const StoryView = ({ useHook, activeRoute }) => {
  const router = useRouter();
  const [itemCount, setItemCount] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  
  // useEffect(() => {
  //   console.log(router.query.count);
  //   console.log(getCount(router.query.count));
  //   setItemCount(getCount(router.query.count));
  // }, []);

  useEffect(() => {
    setItemCount(getCount(router.query.count));
    setIsLoading(false);
  }, [isLoading, router]);

  return isLoading ? null : ( 
    <SiteLayout contentClassName=" auto-rows-auto">
      <div>
        {/* <p>params: {JSON.stringify(query)}</p> */}
        <p>param count: {itemCount}</p>
      </div>

      {/* Navbar */}
      <StoryNav activeRoute={activeRoute} />

      {/* Stories */}
      <StoryList 
        useHook={useHook} 
        itemLimit={itemCount}
      />

      <button 
        className="place-self-start rounded-full mt-5 px-5 py-2 bg-brandOrange text-white"
        onClick={() => {
          console.log('button click',itemCount)
          setItemCount(itemCount + defaultCount); 
          console.log('button click 2',itemCount)
          router.push(router.pathname + '?count=' + itemCount, undefined, { shallow: true })
        }}
      >
        Next
      </button>
    </SiteLayout>
  );
}

const getCount = (countQuery) => {
  console.log('getCount', countQuery);
  if (countQuery) {
    const count = parseInt(countQuery);
    console.log('count', count)
    console.log('return', (count === NaN || count < defaultCount) ? defaultCount : count)
    return (count === NaN || count < defaultCount) ? defaultCount : count;
  } 
  return null;
}

export default StoryView;